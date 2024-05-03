import { FC, ReactNode, useState } from 'react';
import { SearchContext } from '../SearchContext';

interface SearcProviderProps {
  children:ReactNode;
}

export const SearchProvider:FC<SearcProviderProps> = ({children}) => {
  
  const [visibleSearch, setVisibleSearch] = useState<boolean>(true);

  return (
    <SearchContext.Provider value={{visibleSearch, setVisibleSearch}}>
      {children}
    </SearchContext.Provider>
  )
}
