import { Center, Spinner } from '@chakra-ui/react'
import { useState, useEffect } from 'react';

export default function BodyProducts() {

  const [data, setData] = useState(null);
  
  useEffect(() =>{

    const fetchData = async () => {
        try {
          const response = await fetch('https://api.example.com/data');
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      
    }
  
    fetchData();
  }, [data])
  

  return (

    <Center>
    {false ?
    <p>arroz</p>
    :
    loading()}
    </Center>
  )
}

function loading(){
  return(
    <Spinner size={"xl"} />
  );
}
