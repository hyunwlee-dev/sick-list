import axios, { AxiosInstance } from 'axios';

export class HttpClient {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  fetch(url: string, options = { headers: {} }): AxiosInstance {
    return axios.create({
      baseURL: `${this.baseUrl}${url}`,
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
  }
}
