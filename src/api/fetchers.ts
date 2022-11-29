import axios, { AxiosError } from "axios";
import { User } from "../pages/Users";

const api = axios.create({
  baseURL: "https://reqres.in/api/",
});

interface Support {
  url: string;
  text: string;
}

export interface UsersListRes {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
}

export const getUsersList = async () => {
  const { data } = await api.get<UsersListRes>("users?page=2");
  return data;
};
