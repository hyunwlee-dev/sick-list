import { useCallback, useState } from 'react';
import { HttpClient } from '../httpClient';
import { SickService } from '../service/SickService';

const httpClient = new HttpClient(String(process.env.REACT_APP_BASE_URL));
const sickService = new SickService(httpClient);

export const useSearchInput = () => {
  const [searchedValue, setSearchedValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchSick = useCallback(async (searchInput: string) => {
    setIsLoading(true);
    try {
      const response = await sickService.get(searchInput);
      console.log('searchInput: ', searchInput);
      setSearchedValue(response);
    } catch (error) {
      // if (AxiosError(error)) {
      //   return error.response?.data.message;
      // }
    } finally {
      setIsLoading(false);
    }
  }, []);
  return { searchedValue, isLoading, fetchSick };
};
