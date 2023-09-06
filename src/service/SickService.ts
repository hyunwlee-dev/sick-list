import { HttpClient } from '../httpClient';

export class SickService {
  httpClient;
  constructor(httpClient = new HttpClient('')) {
    this.httpClient = httpClient;
    console.log('httpClient: ', httpClient);
  }

  async get(query: string) {
    const response = await this.httpClient.fetch(`sick`, { headers: {} }).get(`?q=${query}`);
    return response.data;
  }
}
