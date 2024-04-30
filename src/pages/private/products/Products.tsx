import { Box, Container, Spacer, Flex } from "@chakra-ui/react";
import Toolbar from "./toolbar/Toolbar";


export default function Products() {
  return (

    
      <Flex 
        maxW={"max-content"} 
        alignItems={"center"} 
        flexDirection={"column"}
        minHeight={"100%"}
        justifyContent={"space-between"}
      >
    
        <Box>
          Heading
        </Box>

        <Spacer />
        
        <Box>
          <Toolbar />
        </Box>
      
      </Flex>


    
  )
}
