import { useEffect, useState } from 'react';
import { HttpClient } from '../httpClient';
import { SickService } from '../service/SickService';
import { useDebounce } from './useDebounce';

const httpClient = new HttpClient(String(process.env.REACT_APP_BASE_URL));
const sickService = new SickService(httpClient);

export const useSearchInput = (keyword: string) => {
  const [searchedArr, setSearchedArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedKeyword = useDebounce(keyword, 200);
  useEffect(() => {
    const fetchSick = async () => {
      setIsLoading(true);
      try {
        const response = await sickService.get(debouncedKeyword);
        setSearchedArr(response);
      } catch (error) {
        //TODO: treat error boundary
        // if (AxiosError(error)) {
        //   return error.response?.data.message;
        // }
      } finally {
        setIsLoading(false);
      }
    };
    if (keyword === '') {
      setSearchedArr([]);
      return;
    }
    fetchSick();
  }, [debouncedKeyword, setSearchedArr]);
  return { searchedArr, isLoading };
};
