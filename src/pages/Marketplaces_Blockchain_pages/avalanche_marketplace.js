import { useToast } from '@chakra-ui/react'
import {Image,Box, VStack,StackDivider ,Text,Button,Flex ,SimpleGrid} from '@chakra-ui/react';
import {Menu,MenuButton, MenuList,MenuItem} from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import { ethers } from 'ethers';
import { Card,Col } from "react-bootstrap";
import { useState ,useEffect} from 'react';

const Avalanche_Marketplace = ({accounts ,chainid,createnftscontractavalanche,nftmarketplaceavalanchecontract}) => {
    const iswalletconnected = Boolean(accounts[0]);
    const [marketitems , setmarketitems] = useState([]);
    const toast = useToast();
    console.log(marketitems);
    
    const explore_not_sold_nfts_avalanche = async () => {
        const nftsitems = await nftmarketplaceavalanchecontract.getnotsoldnfts();
        const nftscount = nftsitems.length;
        let nftitemsnotsold = [];

        for (let i = 0 ; i< nftscount ; i++){
            if (nftsitems[i].issold == 0 ){
                const metadataurl = await createnftscontractavalanche.tokenURI(nftsitems[i].tokenid);
                const responsefrom_metadata = await fetch(metadataurl);
                const metadata = await responsefrom_metadata.json();
                const imageurl = metadata.image;
                const ipfsimageurl = imageurl.replace("ipfs://", "https://ipfs.io/ipfs/");
                const totalprice_marketitem = await nftmarketplaceavalanchecontract.totalpricewith_marketfees(nftsitems[i].itemid);
                const priceofnftindollar = await nftmarketplaceavalanchecontract.getLatestPriceOfMaticVsUSD();
                const finalpriceofnftindollar = Number(priceofnftindollar)/100000000;
                const finaltotalprice_marketitem = Number(totalprice_marketitem)/1000000000000000000;
                var nftindollars = finalpriceofnftindollar * finaltotalprice_marketitem;
                nftindollars = nftindollars.toFixed(3);
                nftitemsnotsold.push({ image: ipfsimageurl , name: metadata.name, description: metadata.description , seller: nftsitems[i].seller, itemid: Number(nftsitems[i].itemid), price:totalprice_marketitem, priceindollars : nftindollars ,nftcontractaddress: nftsitems[i].nftcontractaddress , tokenid : Number(nftsitems[i].tokenid) });
            }
        }
        setmarketitems(nftitemsnotsold);
    }


 




    const buynftfromavalanchemarket = async (marketitem) => {

        try {
            
        const buytx = await (await nftmarketplaceavalanchecontract.buynft(marketitem.itemid, { value: marketitem.price })).wait();
       
        if (buytx.hash || buytx.transactionHash){
            toast({
                title: 'Purchasing NFT success',
                description: "Congratulations! You own that NFT now",
                status: 'success',
                duration: 2100,
                isClosable: true,
                position: 'top-left',   
              });


            
        }
        explore_not_sold_nfts_avalanche();
    }
    catch (err){
        console.log(err)
      
        
    }
     

    }


    useEffect(() => {
        if (iswalletconnected == true && chainid==="0xa869"){
            explore_not_sold_nfts_avalanche();
        }
      
        if (iswalletconnected == false) {
            toast({
                title: 'Connect Wallet',
                description: "You have to Connect your MetaMask Wallet to view Avalanche Marketplace NFT items",
                status: 'info',
                duration: 2100,
                isClosable: true,
                position: 'up',   
              });

        }
        
        
       

      }, [])


    
    if (chainid === "0xa869" ) {

        return (
        
          <VStack
          divider={<StackDivider borderColor='white' />}
          spacing={2}
          align='stretch'
          >   
              <Box bgGradient='linear(to-r, azure,white,azure,white)' height="1200px">
                
                    { iswalletconnected ? (
                        <Flex padding={3} ml={14}>
    
                            {  marketitems.length > 0 ? (
                                <SimpleGrid columns={6} spacingX='60px' spacingY='20px'>
                                    { marketitems.map((nft,idx) => (
                                        <Col >
                                                <br></br>
                                                
                                                <Box  border="1px" borderColor='lightblue' borderRadius="15px" padding={3} pb={1}  width="240px" height="575px">
                                                    <Card key={idx}   >
                                                        <VStack
                                                        divider={<StackDivider borderColor='white' />}
                                                        spacing={1}
                                                        align='stretch'
                                                        >
                                                        <Box>
                                                            <Image variant="top" src= {nft.image} width= "230px"  height="220px"/>
                                                        </Box>
                                                        <Card.Body ml="150px">
                                                            <Box height="30px">
                                                                <Card.Title><Text fontSize={17} ml="15px" fontWeight="extrabold"> {nft.name} </Text> </Card.Title>
                                                            </Box>
                                                            
                                                            <Card.Text>
                                                                <Box height="50px">
                                                                    <Text fontSize={16} ml="15px" fontWeight="bold">
                                                                        {nft.description}
                                                                    </Text>
                                                                    </Box>
                                                                    <Box height="30px">
                                                                        <Text fontSize={18} ml="15px" fontWeight="bold">
                                                                            <a href={`https://testnet.snowtrace.io/address/${nft.seller}`}> 
                                                                                Owner: {nft.seller.slice(0, 5) + '...' + nft.seller.slice(38, 42)}
                                                                            </a>
                                                                        </Text>
                                                                    </Box>
                                                                    <Box height="45px">
                                                                        <Text fontSize={18} ml="15px" fontWeight="bold">
                                                                            Buy for: {ethers.utils.formatEther(nft.price)} AVAX
                                                                        </Text>
                                                                        
                                                                    </Box>

                                                                    <Box height="40px">
                                                                        <Text fontSize={18} ml="15px" fontWeight="bold">
                                                                                Buy for: {nft.priceindollars} $
                                                                        </Text>
                                                                    </Box>
                                                                
                                                                
                                                                <Text fontSize={18} ml="15px" fontWeight="bold">
                                                                    <Menu>
                                                                        <Box height="20px">
                                                                        <MenuButton as={Button} _expanded={{ bg: 'blue.400' }}  _hover={{ bg: 'gray.400' }} >
                                                                            Details
                                                                        </MenuButton>
                                                                        </Box>
                                                                        <MenuList>
                                                                            <MenuItem> 
                                                                                <Text fontSize={15} ml="12px">
                                                                                    <a href={`https://testnet.snowtrace.io/address/${nft.nftcontractaddress}`}> 
                                                                                    NFT contract address: {nft.nftcontractaddress.slice(0, 5) + '...' + nft.nftcontractaddress.slice(38, 42)}
                                                                                    </a>
                                                                                </Text>
                                                                            </MenuItem>
    
                                                                            <MenuItem>
                                                                                <Text fontSize={15} ml="12px"> 
                                                                                    Token ID: {nft.tokenid}
                                                                                </Text>
                                                                            </MenuItem>
                                                                            <MenuItem>
                                                                                <Text fontSize={15} ml="12px"> 
                                                                                    Token Standard: ERC721
                                                                                </Text>
                                                                            </MenuItem>
                                                                            <MenuItem>
                                                                                <Text fontSize={15} ml="12px"> 
                                                                                    Blockchain: Avalanche
                                                                                </Text>
                                                                            </MenuItem>
                                                                        </MenuList>
                                                                    </Menu>
                                                                </Text>
                                                                
                                                            </Card.Text>
                                                          
                                                        </Card.Body>
                                                        <br></br>
                                                        <Card.Footer>
                                                             
                                                               
                                                                 <Button 
                                                                    backgroundColor="grey"
                                                                    fontWeight='extrabold'
                                                                    fontSize={20}
                                                                    colorScheme='green' 
                                                                    variant='solid'
                                                                    borderRadius= "100px"
                                                                    width="120px"
                                                                    height="60px"
                                                                    ml={12}
                                                                    onClick= {() => buynftfromavalanchemarket(nft)}
                                                                
                                                              
            
                                                            >Buy</Button>
                                                        
                                                             
                                                            
                                                         
                                                            
                                                            
                                                        </Card.Footer>
                                                        
                                                        <br></br>
                                                        </VStack>
                                                    </Card>
                                                </Box>
                                                
                                        </Col>
                                    ))}
                                </SimpleGrid>
                           
                        ) : (

                                <VStack
                                divider={<StackDivider borderColor='white' />}
                                spacing={1}
                                align='stretch'
                                >
                                    <Flex justify="center"  fontWeight='extrabold' fontSize="43px" ml ={780} bgClip='text'  bgGradient='linear(to-r, cyan.900, pink.800,cyan.800,)'  padding={50} >
                                    Loading..
                                    </Flex>

                                    <Flex justify="center" fontWeight='extrabold' fontSize="43px" ml={320} bgClip='text'  bgGradient='linear(to-r, cyan.800, pink.800,cyan.800,)'   >
                                    <Spinner
                                        thickness='4px'
                                        speed='0.65s'
                                        emptyColor='gray.200'
                                        color='pink.800'
                                        size='xl'
                                        ml={430}
                                       
                                        />
                                    </Flex>
                                </VStack>
                        )
                        }
                         </Flex>
                         
                    ) : (
                        
                        <Flex  justify="center" fontWeight='extrabold' fontSize="37px" bgClip='text'  bgGradient='linear(to-r, blue.900, red.500)' padding={50} >
                            Connect Wallet to view NFT item on Avalanche Martketplace
                        </Flex>
    
     
                    )
                
                    }           
                    
              </Box>
    
    
          </VStack>
          
        )
        
    
         }
         if (iswalletconnected==true && chainid!="0xa869"){
            return(
            <VStack
            divider={<StackDivider borderColor='white' />}
            spacing={2}
            align='stretch'
            >   
                <Box bgGradient='linear(to-r, azure,white,azure,white)' height="1080px">
                    <Flex justify="center"  fontWeight='extrabold' fontSize="43px"  bgClip='text'  bgGradient='linear(to-r, cyan.900, pink.800,cyan.800,)'  padding={50} >
                                   Switch Your Network to Avalanche Test Network to view NFT items.
                    </Flex>

                </Box>
            </VStack>
            )
         }
       
     
    
};
export default Avalanche_Marketplace;