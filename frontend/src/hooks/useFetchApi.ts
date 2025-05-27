import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import type { Community } from "../utils/types";

const fetchApi = async (): Promise<Community[]> => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_SERVER}/api/communities`
  );
  return response.data?.data;
};

const useFetchApi = () => {
  return useQuery<Community[], AxiosError>({
    queryKey: ["fetchApi"],
    queryFn: fetchApi,
  });
};

export default useFetchApi;
