import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Container
} from "@chakra-ui/react";


export default function Login() {
  return (

    <Flex id="login-body" h={"85vh"} alignItems={"center"}>

      <Container px={"2rem"}>

          <form action="POST">

            {/* {EMAIL} */}
            <FormControl id="userLoginEmail" isRequired gap={"8px"}>
              <FormLabel fontFamily={"Input-SemiBold"} >Email</FormLabel>
              <Input textAlign={"center"} fontFamily={"Input-Regular"} type="email" variant={"outline"} size={"md"} autoComplete="off"/>
            </FormControl>

            {/* PASSWORD */}
            <FormControl id="userLoginPassword" isRequired my={"15px"}>
            <FormLabel fontFamily={"Input-SemiBold"}>Password</FormLabel>
              <Input fontFamily={"Input-Bold"} textAlign={"center"} type="password" variant={"outline"} size={"md"} />
            </FormControl>

            {/* Buttons */}
            <Flex wrap={"wrap"} alignItems={"center"} justifyContent={"space-between"}>

              <Button colorScheme={"telegram"}>Sing up</Button>
              <Button colorScheme={"whatsapp"}>Log in</Button>

            </Flex>
          </form>
      </Container>

    </Flex>

  )
}
