import {Image,Box, VStack,StackDivider ,HStack,Text,Button} from '@chakra-ui/react';
import { Link } from "react-router-dom";

const NFTSMARKET = () => {

    
    return (
      <VStack
      divider={<StackDivider borderColor='white' />}
      spacing={2}
      align='stretch'
      >   
          <Box bgGradient='linear(to-r, azure,white,azure,white)' height="889px">
                <VStack
            divider={<StackDivider borderColor='white' />}
            spacing={1}
            align='stretch'
            >   
                <Box padding={5}>
                    <HStack>
                        <Button borderRadius="50px"  width="50%" height="400px" as={Link} to= "/nftmarketplaces/ethereum_marketplace" >
                                   
                                <Image src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=023" width="35%" />
                                <Text  justify="center" fontWeight='extrabold' fontSize="45px" bgClip='text'  bgGradient='linear(to-r, cyan.800, pink.800,cyan.800,)' ml={10} >Ethereum Marketplace</Text>
                                 
                        </Button>

                        <Button borderRadius="50px"  width="50%" height="400px" as={Link} to= "/nftmarketplaces/polygon_marketplace"   >
                                   
                                   <Image src="https://cryptologos.cc/logos/polygon-matic-logo.png?v=023" width="35%" />
                                   <Text  justify="center" fontWeight='extrabold' fontSize="45px" bgClip='text'  bgGradient='linear(to-r, cyan.800, pink.800,cyan.800,)' ml={10} >Polygon Marketplace</Text>
                                    
                        </Button>
    
                    </HStack>             
                </Box>



                <Box padding={5}>
                     <HStack>
                     <Button borderRadius="50px"  width="50%" height="400px" as={Link} to= "/nftmarketplaces/avalanche_marketplace"   >
                                   
                                   <Image src="https://cryptologos.cc/logos/avalanche-avax-logo.png?v=023" width="35%" />
                                   <Text  justify="center" fontWeight='extrabold' fontSize="45px" bgClip='text'  bgGradient='linear(to-r, cyan.800, pink.800,cyan.800,)' ml={10} >Avalanche Marketplace</Text>
                                    
                    </Button>
                      

                    <Button borderRadius="50px"  width="50%" height="400px" as={Link} to= "/nftmarketplaces/binance_marketplace"   >
                                   
                                   <Image src="https://cryptologos.cc/logos/bnb-bnb-logo.png?v=023" width="35%" />
                                   <Text  justify="center" fontWeight='extrabold' fontSize="45px" bgClip='text'  bgGradient='linear(to-r, cyan.800, pink.800,cyan.800,)' ml={10} >Binance Marketplace</Text>
                                    
                    </Button>

                     
                    </HStack>                 
                </Box>
        

      </VStack>
      
           

          </Box>
        

      </VStack>
  


   ) 
    
};
export default NFTSMARKET;