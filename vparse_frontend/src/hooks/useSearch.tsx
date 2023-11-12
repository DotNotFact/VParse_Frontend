import userService from "../Services/UserService";
import { IFilterProps } from "../models/IHeader";
import { toast } from "react-toastify";
import { useQuery } from "react-query";

export const useSearch = (filters: IFilterProps) => {
  return useQuery({
    queryKey: ["search", filters],
    queryFn: async () => {
      try {
        const result = await userService.Search(filters);
        return result;
      } catch (error) {
        throw new Error("Failed to fetch data");
      }
    },
    enabled: !!filters,
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
