import { Dispatch, SetStateAction, createContext } from "react";
import { IFilterProps } from "../../models/IHeader";

interface FilterContextType {
  filter: IFilterProps;
  setFilter: Dispatch<SetStateAction<IFilterProps>>;
}

const initialFilter: IFilterProps = {
  age_from: "",
  age_to: "",
  sex: "0",
  sort: "0",
  status: "",
  has_photo: "0",
  online: "0",
  can_write_private_message: "0",
  can_send_friend_request: "0",
  can_see_all_posts: "0",
  is_friend: "0",
  common_count: "0",
};

const FilterContext = createContext<FilterContextType>({
  filter: initialFilter,
  setFilter: () => {},
});

export default FilterContext;
