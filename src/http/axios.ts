import axios, { AxiosStatic } from 'axios';

declare module 'vue/types/vue' {
  interface Vue {
    axios: AxiosStatic;
  }
}

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export async function getUsers(): Promise<any> {
  const response = await http.get(`users`);
  return response.data;
}

export async function getUserRepositories(userId: string): Promise<any> {
  const response = await http.get(`users/${userId}/repos`);
  return response.data;
}
