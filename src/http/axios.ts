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
  const response = await http.get(`users`).catch(error => {
    const staticUsers = require('../static_data/users.json');
    return { data: staticUsers.items };
  });
  return response.data;
}

export async function getUserRepositories(userId: string): Promise<any> {
  const response = await http.get(`users/${userId}/repos`).catch(error => {
    const staticRepositories = require('../static_data/repositories.json');
    return {
      data: staticRepositories.filter((repo: any) => repo.owner.id == userId),
    };
  });
  return response.data;
}
