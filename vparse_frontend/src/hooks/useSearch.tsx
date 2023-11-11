import userService from "../Services/UserService";
import { IFilterProps } from "../models/IHeader";
import { toast } from "react-toastify";
import { useQuery } from "react-query";

export const useSearch = (token: string, filters: IFilterProps) => {
  return useQuery({
    queryKey: ["search", token, filters],
    queryFn: async () => {
      try {
        const result = await userService.Search(token, filters);
        return result;
      } catch (error) {
        throw new Error("Failed to fetch data");
      }
    },
    enabled: !!token,
    select: ({ data }: any) => {
      return data.items;
    },
    onError: (err) => {
      if (err instanceof Error) {
        toast.error(err.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    },
    refetchOnWindowFocus: false,
  });
};
