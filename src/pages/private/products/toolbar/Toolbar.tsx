import { useContext } from "react";
import { Box, useDisclosure, HStack  } from "@chakra-ui/react";
import { 
  CiNoWaitingSign, 
  CiSearch,
  CiSquarePlus
 } from "react-icons/ci";
import { SearchContext } from "../context/SearchContext";
import NewProduct from "../partials/NewProduct";

export default function Toolbar() {

  const {visibleSearch, setVisibleSearch} = useContext<any | null>(SearchContext);

  const { 
    isOpen: isOpenNewProduct, 
    onClose: onCloseNewProduct, 
    onOpen: onOpenNewProduct } = useDisclosure();
  
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

      <Box onClick={onOpenNewProduct}>
        <CiSquarePlus size={36} color={"white"} />
        <NewProduct isOpen={isOpenNewProduct} onClose={onCloseNewProduct}/>
      </Box>
    
    </HStack>
      
  );
}