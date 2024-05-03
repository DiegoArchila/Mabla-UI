import { useContext } from "react";
import { 
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Box
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { SearchContext } from "../../context/SearchContext";
import { SearchContextType } from "../../context/interfaces/interfaces";


function handleSubmit(e: React.FormEvent):void {
    e.preventDefault();
}

export default function Search() {

  const { visibleSearch } = useContext<SearchContextType | boolean>(SearchContext);


  return (

    <Box w={"80vw"} display={visibleSearch ? "none":"block"}>

      <form action="/mabla/api/products" method="get" onSubmit={handleSubmit}>
          
          <FormControl pt={"8px"}>
            <InputGroup>
              <InputLeftElement pointerEvents={"none"}>
                <CiSearch color="gray" size={24}/>
              </InputLeftElement>
              
              <Input type='text'size={"md"}/>
              
            </InputGroup>

          </FormControl>

        </form>
    </Box>
    
  )
}