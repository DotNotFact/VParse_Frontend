import userService from "../Services/UserService";
import { IFilterProps } from "../models/IHeader";
import { toast } from "react-toastify";
import { useQuery } from "react-query";

export const useSearch = (filters: IFilterProps) => {
  const token = localStorage.getItem("token") as string;

  return useQuery({
    queryKey: ["search", filters],
    queryFn: () => userService.Search(token, filters),
    select: ({ data }) => data.items,
    enabled: !!token,
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
