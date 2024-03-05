import { Button } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

export default function User() {

  // Emulate an any user
  const user: any = {};
  const pathLogin="/login";
  const currentLocation=useLocation().pathname;

  const ButtonLogin:ReactElement=(
    <Button
        variant={"outline"}
        border={" 0.5px solid white"}
        _hover={{
          color: "black",
          bgColor:"white"
        }}
        color={"white"}
        size={"sm"}
    >
      <Link to={"/login"}>
        {"login"}
      </Link>
    </Button>
  );


  return (
    
    <>
      {user!=null &&  currentLocation.match(pathLogin) ?
        <></> :
        ButtonLogin
      }    
    </>
  )
}
