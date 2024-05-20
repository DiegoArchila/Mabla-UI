import { ChangeEvent, FormEvent, useState } from "react";
import { FiSave } from "react-icons/fi";
import { MdAddChart, MdOutlineNewLabel } from "react-icons/md";
import { product } from "../../../../interfaces/Product";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Textarea,
    Select,
    Button,
    HStack,
    useDisclosure
  } from '@chakra-ui/react'
import { CiNoWaitingSign } from "react-icons/ci";
import { NewUnitMeasure } from "./NewUnitMeasure";


//Locals Functions
function handleSubmit(e:FormEvent) {
  e.preventDefault();
}

function changeHandle(e:ChangeEvent<HTMLInputElement>) {
  e.currentTarget.value
}
  
export default function NewProduct({isOpen, onClose}) {

  //Handle to show newUnitMeasure component
  const { 
    isOpen: isOpenUnitMeasure, 
    onClose: onCloseUnitMeasure,
    onOpen: onOpenUnitMeasure } = useDisclosure();

  //Handle to show newGroup component
  const { 
    isOpen: isOpenGroup, 
    onClose: onCloseGroup,
    onOpen: onOpenGroup } = useDisclosure();

  //Handle the state from product  
  const [Product, setProduct] = useState<product>();

  return (

    <>
      <Drawer 
        isOpen={isOpen}
        onClose={onClose}
        placement={"right"}
        size={"full"}

      > 
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"white"}/>
          <DrawerHeader mb={"10px"} bgColor={"gray.800"} color={"white"} boxShadow={"lg"}>
            Crear nuevo producto
          </DrawerHeader>

          <DrawerBody>

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
                    placeholder="Ingresa el nombre del producto"
                  />
                  <FormErrorMessage>{"No has ingresado el nombre del producto"}</FormErrorMessage>
              </FormControl>

              {/* Field DESCRIPTION */}
              <FormControl mb={"15px"}>
                  <FormLabel fontFamily={"Input-SemiBold"}>Descripción</FormLabel>
                  <Textarea
                    fontFamily={"Parrafs-regular"}
                    placeholder="Ingresa la descripción"
                  />
              </FormControl>

              {/* Field SKU */}
              <FormControl mb={"15px"}>
                  <FormLabel fontFamily={"Input-SemiBold"}>SKU</FormLabel>
                     <Input 
                      type="text" 
                      placeholder="Ingresa el SKU"
                    />              
              </FormControl>

              {/* Field UNIT MEASURE */}
              <FormControl isRequired mb={"15px"}>
              <FormLabel fontFamily={"Input-SemiBold"}>Unidad de Medida</FormLabel>
                <HStack>

                  <Select>
                    <option value={""}>UN {"Elije"}</option>
                  </Select>

                  <Button 
                    rightIcon={<MdAddChart />} 
                    variant={"outline"}
                    fontFamily={"Input-SemiBold"}
                    colorScheme="blue"
                    onClick={onOpenUnitMeasure}
                  >
                    Crear
                  </Button>

                  <NewUnitMeasure isOpen={isOpenUnitMeasure} onClose={onCloseUnitMeasure} />

                </HStack>

                <FormHelperText>Sí no existe, lo puedes crear</FormHelperText>
                
                <FormErrorMessage>{"Selecciona un grupo"}</FormErrorMessage>  
              </FormControl>

              {/* Field GROUP */}
              <FormControl isRequired mb={"15px"}>
              <FormLabel fontFamily={"Input-SemiBold"}>Grupo</FormLabel>
                <HStack>
                  <Select>
                    <option value={""}>UN {"Elije"}</option>
                  </Select>
                  <Button 
                    rightIcon={<MdOutlineNewLabel />} 
                    variant={"outline"}
                    colorScheme="blue"
                    fontFamily={"Input-SemiBold"}
                  >
                    Crear
                  </Button>
                </HStack>
                <FormHelperText>Sí no existe, lo puedes crear</FormHelperText>
                <FormErrorMessage display={"block"}>Selecciona el grupo</FormErrorMessage>
              </FormControl>

              {/* Field NOTES */}
              <FormControl mb={"15px"}>
                  <FormLabel fontFamily={"Input-SemiBold"}>Notas</FormLabel>
                  <Textarea
                    placeholder="Ingresa las notas"
                  />
              </FormControl>

              
            </form>

          </DrawerBody>

          <DrawerFooter bgColor={"gray.800"} display={"flex"} justifyContent={"space-between"}>
              <Button 
                fontFamily={"Input-SemiBold"} 
                leftIcon={<FiSave />}
                variant={"outline"}
                color={"white"}
                size={"sm"}
              >
                Guardar
              </Button>
              <Button 
                fontFamily={"Input-SemiBold"} 
                rightIcon={<CiNoWaitingSign />}
                variant={"outline"}
                color={"white"}
                size={"sm"}
                onClick={onClose}
              >
                Cancelar
              </Button>
          </DrawerFooter>
        </DrawerContent>

        
      </Drawer>
    </>
  )
}