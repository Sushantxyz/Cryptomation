import React ,{useEffect,useState}from 'react';
import axios from 'axios';
import { server } from '..';
import { Container, HStack, Heading, Button,RadioGroup,Radio} from '@chakra-ui/react';
import { ErrorComponent } from './ErrorComponent';
import { CoinCard } from './CoinCard';




export const Coins = () => {

    const btns=new Array(132).fill(1);

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currency, setCurrency] = useState("inr");
    const [page,setpage] = useState(1);
    const currencysymbol= currency=== "inr" ? "₹" : currency==="eur"?"€" : "$";

    const changepage=(a)=>{
        setpage(a);
        setLoading(false);
    }

    useEffect(() => {
        const fetchcoin= async ()=>{

        try {

            const{data}=await axios(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
            setCoins(data);
            console.log(data);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }

    }
        fetchcoin();
    }, [currency,page])
    
    if(error) return <ErrorComponent/>;


    return (
        
        <Container maxW={"container.xl"} bgColor={"white"} color={"black"}>
            {
                loading? (<Loader/>) : (<>

            <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
                        <HStack spacing={"4"}>
                        <Radio value={"inr"}>INR</Radio>
                        <Radio value={"usd"}>USD</Radio>
                        <Radio value={"eur"}>EUR</Radio>
                        </HStack>
                    </RadioGroup>
                    
                    <HStack flexWrap={"wrap"} justifyContent={"space-evenly"}>
                        {coins.map((i)=>(
                            <CoinCard   
                            name={i.name} 
                            rank={i.trust_score} 
                            url={i.url} 
                            img={i.image} 
                            id={i.id}
                            symbol={i.symbol}
                            price={i.current_price}
                            key={i.id}
                            currencysymbol={currencysymbol}
                            />
                            ))}
                    </HStack>
                    <HStack overflowX={"auto"} w={'full'}>
                        {btns.map((items,index)=>(
                            <Button bgColor={"black"} color={"white"} onClick={()=>{
                                changepage(index+1);
                            }}>
                            {index+1}
                        </Button>
                        ))
                    }
                    </HStack>
                    
                </>)
            }
        </Container>
    );
}




// const Loader=()=>{
//     <div>
//         Loading...
//     </div>
// }

const Loader=()=>{
    <Container>
        <Heading>
            LOADING.....
        </Heading>
    </Container>
}







