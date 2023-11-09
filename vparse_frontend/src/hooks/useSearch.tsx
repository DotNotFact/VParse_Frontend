import userService from "../Services/UserService";
import { IFilterProps } from "../models/IHeader";
import { toast } from "react-toastify";
import { useQuery } from "react-query";

export const useSearch = (token: string, filters: IFilterProps) => {
  return useQuery({
    queryKey: ["search", token, filters],
    queryFn: () => {
      userService.Search(token, filters);
    },
    enabled: !!token,
    select: ({ data }: any) => data.items,
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
