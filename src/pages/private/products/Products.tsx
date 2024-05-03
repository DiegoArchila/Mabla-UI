import { Box, Spacer, Flex } from "@chakra-ui/react";
import Toolbar from "./toolbar/Toolbar";
import Search from "./toolbar/search/Search";
import { SearchProvider } from "./context/providers/SearchProvider";
import BodyProducts from "./body/BodyProducts";


export default function Products() {

  return (

      <SearchProvider>

        <Flex
          alignItems={"center"}
          flexDirection={"column"}
          height={"100%"}
          width={"100%"}
          justifyContent={"space-between"}
        >

          {/* This component already applies the box component inside <Search />*/}
          {/* <Box w={"80vw"} display={visibleSearch ? "none":"block"}> */}
            <Search />
          {/* </Box> */}

          <Spacer />

          <BodyProducts />

          <Spacer />

          <Box width={"100%"}>
            <Toolbar />
          </Box>

        </Flex>

      </SearchProvider>
  )
}
