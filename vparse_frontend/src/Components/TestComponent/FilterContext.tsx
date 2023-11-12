import { createContext } from "react";

const initialFilter = {};

const FilterContext = createContext({
  filter: initialFilter, // Изначальные значения фильтра
  setFilter: {}, // Пустая функция, будет переопределена позже
});

export default FilterContext;
