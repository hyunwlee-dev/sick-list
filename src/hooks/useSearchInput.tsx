import { useEffect, useState } from 'react';
import { HttpClient } from '../httpClient';
import { SickService } from '../service/SickService';
import { getCacheData, setCacheData } from '../utils/cacheStorage';
import { useDebounce } from './useDebounce';

const httpClient = new HttpClient(String(process.env.REACT_APP_BASE_URL));
const sickService = new SickService(httpClient);

export const useSearchInput = (keyword: string) => {
  const [searchedArr, setSearchedArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedKeyword = useDebounce(keyword, 200);
  const getSickServiceWithCacheStorage = async (keyword: string) => {
    //FIX: Don't use magic url
    const cachedResponse = await getCacheData('http://localhost:4000/sick', keyword);
    if (cachedResponse) {
      return await cachedResponse.json();
    } else {
      const data = await sickService.get(keyword);
      //FIX: Don't use magic url
      setCacheData('http://localhost:4000/sick', keyword, data);
      return data;
    }
  };
  useEffect(() => {
    const fetchSick = async () => {
      setIsLoading(true);
      try {
        const response = await getSickServiceWithCacheStorage(debouncedKeyword);
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
