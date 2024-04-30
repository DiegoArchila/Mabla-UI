import { 
  FormControl,
  Input,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";



function handleSubmit(e: React.FormEvent):void {
    e.preventDefault();
}

export default function Search() {
  return (
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
  )
}