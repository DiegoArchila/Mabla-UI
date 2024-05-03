import { useContext } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { 
  CiNoWaitingSign, 
  CiSearch,
  CiSquarePlus
 } from "react-icons/ci";
import { SearchContext } from "../context/SearchContext";

export default function Toolbar() {

  const {visibleSearch, setVisibleSearch} = useContext<any | null>(SearchContext);

  const ToggleVisibleSearch = () => {
    setVisibleSearch((visible)=> !visible)
  }

   return (
    
    <HStack 
      bgColor={"var(--chakra-colors-gray-800)"}
      height={"48px"}
      width={"100%"}
      justifyContent={"space-evenly"}
    >

      <Box 
        display={visibleSearch ? "block":"none"}
        onClick={ToggleVisibleSearch}
      >
        <CiSearch color={"white"} size={36} />
      </Box>

      <Box 
        display={visibleSearch ? "none":"block"}
        onClick={ToggleVisibleSearch}
      >
        <CiNoWaitingSign 
          size={36} 
          color={"white"} 
        />
      </Box>

      <Box>
        <CiSquarePlus size={36} color={"white"} />
      </Box>
    
    </HStack>
      
  );
}