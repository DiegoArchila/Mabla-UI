import { 
  Modal, 
  ModalContent, 
  ModalOverlay, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea} from "@chakra-ui/react";
import { FormEvent } from "react";
import { CiNoWaitingSign } from "react-icons/ci";
import { FiSave } from "react-icons/fi";

export const NewUnitMeasure = ({isOpen, onClose}) => {

  //Locals Functions
  function handleSubmit(e:FormEvent) {
    e.preventDefault();
  }

  return (
    
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        
        <ModalOverlay />
        
        <ModalContent>

        {/*HEADER*/}
        <ModalHeader>Nueva Unidad de Medida</ModalHeader>
        <ModalCloseButton />

        {/*BODY*/}
        <ModalBody>

          <form 
                method="POST"
                action="/"
                onSubmit={handleSubmit}
          >
            
            {/* Field NAME */}
            <FormControl isRequired mb={"15px"}>
                <FormLabel fontFamily={"Input-SemiBold"}>Nombre</FormLabel>
                <Input 
                  type="text" 
                  placeholder="Ingresa el nombre"
                />
                <FormErrorMessage>{"No has ingresado el nombre de la unidad de medida"}</FormErrorMessage>
            </FormControl>

            {/* Field DESCRIPTION */}
            <FormControl mb={"15px"}>
                <FormLabel fontFamily={"Input-SemiBold"}>Descripción</FormLabel>
                <Textarea
                  fontFamily={"Parrafs-regular"}
                  placeholder="Ingresa la descripción"
                />
            </FormControl>

            {/* Field SYMBOL */}
            <FormControl isRequired mb={"15px"}>
                <FormLabel fontFamily={"Input-SemiBold"}>Símbolo</FormLabel>
                <Input 
                  type="text" 
                  placeholder="Ingresa el simbolo"
                />
                <FormErrorMessage>{"No has ingresado el símbolo de la unidad de medida"}</FormErrorMessage>
            </FormControl>

          </form>
        </ModalBody>

        {/*FOOTER*/}
        <ModalFooter display={"flex"} justifyContent={"space-between"}>
            <Button 
                fontFamily={"Input-SemiBold"} 
                leftIcon={<FiSave />}
                variant={"outline"}
                color={"blue"}
                size={"md"}
              >
                Guardar
              </Button>
              <Button 
                fontFamily={"Input-SemiBold"} 
                rightIcon={<CiNoWaitingSign />}
                variant={"solid"}
                color={"red"}
                size={"md"}
                onClick={onClose}
              >
                Cancelar
            </Button>    
        </ModalFooter>

        </ModalContent>

      </Modal>
    </>

    
  )
}
