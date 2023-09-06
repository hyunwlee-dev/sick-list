import { isAxiosError } from 'axios';
import { HttpClient } from '../httpClient';

export class SickService {
  httpClient;
  constructor(httpClient = new HttpClient('')) {
    this.httpClient = httpClient;
  }

  async get(query: string) {
    try {
      const response = await this.httpClient.fetch(`sick`, { headers: {} }).get(`?q=${query}`);
      if (response.status === 200) {
        console.info('calling api');
        return response.data;
      }
    } catch (error) {
      if (isAxiosError(error)) {
        return error.response?.data.message;
      }
    }
  }
}
