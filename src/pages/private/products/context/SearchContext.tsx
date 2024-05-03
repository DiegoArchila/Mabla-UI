import { createContext } from "react";
import { SearchContextType } from "./interfaces/interfaces";

export const SearchContext = createContext<SearchContextType | boolean>(true);