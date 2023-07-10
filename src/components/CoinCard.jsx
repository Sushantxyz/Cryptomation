
import { VStack ,Image, Heading, Text} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
export const CoinCard=({name,img,url,symbol,price,id,currencysymbol="₹"})=>(

    // <Link to={`/coin/${id}`}>
    <a href={`https://www.${name}.com`}>
        <VStack 
            w={"52"} 
            shadow={'lg'} 
            p={8} 
            borderRadius={'lg'} 
            m={4}
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
                {symbol}
            </Heading>

            <Text noOfLines={1}>{name}</Text>
            <Text noOfLines={1}>{price? `${currencysymbol}:${price}`:"NA"}</Text>

        
        </VStack>
    </a>
)