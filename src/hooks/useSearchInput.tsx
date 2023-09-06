import { useCallback, useState } from 'react';
import { HttpClient } from '../httpClient';
import { SickService } from '../service/SickService';

const httpClient = new HttpClient(String(process.env.REACT_APP_BASE_URL));
const sickService = new SickService(httpClient);

export const useSearchInput = () => {
  const [searchedArr, setSearchedArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchSick = useCallback(async (searchInput: string) => {
    if (searchInput === '') {
      setSearchedArr([]);
      return;
    }
    setIsLoading(true);
    try {
      const response = await sickService.get(searchInput);
      setSearchedArr(response);
    } catch (error) {
      //TODO: treat error boundary
      // if (AxiosError(error)) {
      //   return error.response?.data.message;
      // }
    } finally {
      setIsLoading(false);
    }
  }, []);
  return { searchedArr, isLoading, fetchSick };
};
