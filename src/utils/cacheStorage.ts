import { EXPIRE_MINUTE } from '../constants';
import { SickResponse } from '../types/SickType';

export const setCacheData = async (url: string, query: string, data: SickResponse[]) => {
  const cacheStorage = await caches.open(url);
  const expireDate = new Date();
  expireDate.setMinutes(expireDate.getMinutes() + EXPIRE_MINUTE);
  const headerOption = {
    headers: {
      Expires: expireDate.toUTCString(),
    },
  };
  const cacheResponse = new Response(JSON.stringify(data), headerOption);
  cacheStorage.put(query, cacheResponse);
};

export const getCacheData = async (url: string, query: string) => {
  const cacheStorage = await caches.open(url);
  const cachedResponse = await cacheStorage.match(query);
  if (!cachedResponse) return null;
  const expireHeader = cachedResponse.headers.get('Expires');
  if (!expireHeader) return null;
  const parseExpireHeader = new Date(expireHeader);
  const isExpired = new Date() > parseExpireHeader;
  if (isExpired) return null;
  return cachedResponse;
};
