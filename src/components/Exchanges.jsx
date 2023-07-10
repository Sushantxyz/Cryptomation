import React ,{useEffect,useState}from 'react';
import axios from 'axios';
import { server } from '..';
import { Container, HStack, VStack ,Image, Heading, Text} from '@chakra-ui/react';
import { color } from 'framer-motion';
import { ErrorComponent } from './ErrorComponent';




export const Exchanges = () => {

     const [exchanges, setExchanges] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(false);


    
    useEffect(() => {
        const fetchexc= async ()=>{
        try {

            const{data}=await axios(`${server}/exchanges`);
            setExchanges(data);

        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }
        fetchexc();
        setLoading(false);
    }, [])

    if(error) return <ErrorComponent/>;

    return (
        <Container maxW={"container.xl"} bgColor={"white"} color={"black"}>
            {
                loading? <Loader/> : <>
                    <HStack flexWrap={"wrap"} justifyContent={"space-evenly"}>
                        {exchanges.map((i)=>(
                            <ExchangeCard   
                            name={i.name} 
                            rank={i.trust_score} 
                            url={i.url} 
                            img={i.image} 
                            key={i.id} 
                            />
                        ))}
                    </HStack>
                </>
            }
        </Container>
    );
}




const Loader=()=>{
    <Container w={"100%"} h={"100vh"} bgColor={"Black"} color={"white"} ms={"auto"} >
        <Heading>
            Loading....
        </Heading>
    </Container>
}



const ExchangeCard=({name,img,rank,url})=>(

    <a href={url} target={"blank"} justifyContent={"space-evenly"}>
        <VStack w={"52"} shadow={'lg'} p={8} borderRadius={'lg'} m={4}
        transition={"all 0.4s"} 
        css=
        {
            {
                "&:hover":{
                    transform:"scale(1.1)",
                    color:"white",
                    backgroundColor:"black"


                }
            }
        }>

            <Image 
            src={img} 
            w={"10"} 
            h={"10"} 
            objectFit={"contain"} 
            alt={"Exchange"}
            />

            <Heading size={"md"} noOfLines={1}>
                {rank}
            </Heading>

            <Text>{name}</Text>
        
        </VStack>
    </a>
)


