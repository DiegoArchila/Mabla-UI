import { Box, Flex, Text } from "@chakra-ui/react";
//import Menu from "./components/menu/Menu";
import User from "./components/user/User";
import { Link } from "react-router-dom";

function Header() {

  return (
    <Flex
      px={"10px"}
      id={"navbar"}
      minHeight={"48px"}
      minWidth='max-content'
      alignItems={"center"}
      justifyContent={"space-between"}
      bgColor={"gray.800"}
      boxShadow={"lg"}
    >

      {/* MENU AND BRAND */}
      <Box id={"navbar-container-MenuBrand"} display={"inline-flex"} alignItems={"center"} gap={"24px"}>

        {/* <Menu /> */}

        <Text fontWeight={800} fontFamily={"brand"} fontSize={28} color={"white"}>
          <Link to={"/"}>
            MABLA
          </Link>
        </Text>

      </Box>

      {/* LOG IN AND SING UP */}
      <User />

    </Flex>
  );
}

export default Header;