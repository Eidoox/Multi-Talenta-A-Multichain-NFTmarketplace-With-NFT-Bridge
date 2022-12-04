import {  useToast } from '@chakra-ui/react'
import {Image,Box, VStack,StackDivider ,Text,Button,Flex ,SimpleGrid} from '@chakra-ui/react';
import {Menu,MenuButton, MenuList,MenuItem} from '@chakra-ui/react'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton , FormLabel, Input} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { ethers } from 'ethers';
import { Card,Col } from "react-bootstrap";
import { useState ,useEffect} from 'react';

const MYCREATEDNFTS = ({accounts ,chainid,createnftscontractpolygon,createnftscontractethereum,createnftscontractavalanche,createnftscontractbinance,nftmarketplacepolygoncontract , nftmarketplaceethereumcontract, nftmarketplaceavalanchecontract,nftmarketplacebinancecontract}) => {
    const iswalletconnected = Boolean(accounts[0]);


    const [myownnftspolygon, setmyownnftspolygon] = useState([]);
    const [myownnftsethereum, setmyownnftsethereum] = useState([]);
    const [myownnftsavalanche, setmyownnftsavalanche] = useState([]);
    const [myownnftsbinance, setmyownnftsbinance] = useState([]);

    const [currentnftcontractaddress, setcurrentnftcontractaddress] = useState("");
    const [currenttokenid, setcurrenttokenid] = useState();

 

    const { isOpen, onOpen, onClose } = useDisclosure();


    const toast = useToast();
  
    
    const getmynftspolygon = async ()=> {
        const mynftscount = await createnftscontractpolygon.getmycreatednftsdatalength();
        let mynfts = [];
        let mynftstokenidsnotlisted = [];
        for (let i = 0; i <Number(mynftscount); i++){ 
            const nftdata = await createnftscontractpolygon.getmycreatednftsdata();
            if ( nftdata[i].creator.toLowerCase() == accounts[0] && nftdata[i].islisted == 0){
                mynftstokenidsnotlisted.push(Number(nftdata[i].tokenid));
                
            }
        }
        for (let i=0 ; i<mynftstokenidsnotlisted.length;i++){
            const metadataurl = await createnftscontractpolygon.tokenURI(mynftstokenidsnotlisted[i]);
            const responsefrom_metadata = await fetch(metadataurl);
            const metadata = await responsefrom_metadata.json();
            const imageurl = metadata.image;
            const ipfsimageurl = imageurl.replace("ipfs://", "https://ipfs.io/ipfs/");
            mynfts.push({ image: ipfsimageurl , name: metadata.name, description: metadata.description, nftcontractaddress: createnftscontractpolygon.address , tokenid: mynftstokenidsnotlisted[i]  });

            
        }
        setmyownnftspolygon(mynfts);
    }



    const getmynftsethereum = async ()=> {
        const mynftscount = await createnftscontractethereum.getmycreatednftsdatalength();
        let mynfts = [];
        let mynftstokenidsnotlisted = [];
        for (let i = 0; i <Number(mynftscount); i++){ 
            const nftdata = await createnftscontractethereum.getmycreatednftsdata();
            if ( nftdata[i].creator.toLowerCase() == accounts[0] && nftdata[i].islisted == 0){
                mynftstokenidsnotlisted.push(Number(nftdata[i].tokenid));
                
            }
        }
        for (let i=0 ; i<mynftstokenidsnotlisted.length;i++){
            const metadataurl = await createnftscontractethereum.tokenURI(mynftstokenidsnotlisted[i]);
            const responsefrom_metadata = await fetch(metadataurl);
            const metadata = await responsefrom_metadata.json();
            const imageurl = metadata.image;
            const ipfsimageurl = imageurl.replace("ipfs://", "https://ipfs.io/ipfs/");
            mynfts.push({ image: ipfsimageurl , name: metadata.name, description: metadata.description, nftcontractaddress: createnftscontractethereum.address , tokenid: mynftstokenidsnotlisted[i]  });

            
        }
        setmyownnftsethereum(mynfts);
    }


    const getmynftsbinance = async ()=> {
        const mynftscount = await createnftscontractbinance.getmycreatednftsdatalength();
        let mynfts = [];
        let mynftstokenidsnotlisted = [];
        for (let i = 0; i <Number(mynftscount); i++){ 
            const nftdata = await createnftscontractbinance.getmycreatednftsdata();
            if ( nftdata[i].creator.toLowerCase() == accounts[0] && nftdata[i].islisted == 0){
                mynftstokenidsnotlisted.push(Number(nftdata[i].tokenid));
                
            }
        }
        for (let i=0 ; i<mynftstokenidsnotlisted.length;i++){
            const metadataurl = await createnftscontractbinance.tokenURI(mynftstokenidsnotlisted[i]);
            const responsefrom_metadata = await fetch(metadataurl);
            const metadata = await responsefrom_metadata.json();
            const imageurl = metadata.image;
            const ipfsimageurl = imageurl.replace("ipfs://", "https://ipfs.io/ipfs/");
            mynfts.push({ image: ipfsimageurl , name: metadata.name, description: metadata.description, nftcontractaddress: createnftscontractbinance.address , tokenid: mynftstokenidsnotlisted[i]  });

            
        }
        setmyownnftsbinance(mynfts);
    }


    const getmynftsavalanche = async ()=> {
        const mynftscount = await createnftscontractavalanche.getmycreatednftsdatalength();
        let mynfts = [];
        let mynftstokenidsnotlisted = [];
        for (let i = 0; i <Number(mynftscount); i++){ 
            const nftdata = await createnftscontractavalanche.getmycreatednftsdata();
            if ( nftdata[i].creator.toLowerCase() == accounts[0] && nftdata[i].islisted == 0){
                mynftstokenidsnotlisted.push(Number(nftdata[i].tokenid));
                
            }
        }
        for (let i=0 ; i<mynftstokenidsnotlisted.length;i++){
            const metadataurl = await createnftscontractavalanche.tokenURI(mynftstokenidsnotlisted[i]);
            const responsefrom_metadata = await fetch(metadataurl);
            const metadata = await responsefrom_metadata.json();
            const imageurl = metadata.image;
            const ipfsimageurl = imageurl.replace("ipfs://", "https://ipfs.io/ipfs/");
            mynfts.push({ image: ipfsimageurl , name: metadata.name, description: metadata.description, nftcontractaddress: createnftscontractavalanche.address , tokenid: mynftstokenidsnotlisted[i]  });

            
        }
        setmyownnftsavalanche(mynfts);
    }



    useEffect(() => {
        if (iswalletconnected == true && chainid==="0x13881"){
            getmynftspolygon();
        }
        if (iswalletconnected == true && chainid==="0x5"){
            getmynftsethereum();
        }
        if (iswalletconnected == true && chainid==="0xa869"){
            getmynftsavalanche();
        }
        if (iswalletconnected == true && chainid==="0x61"){
            getmynftsbinance();
        }
      
        if (iswalletconnected == false) {
            toast({
                title: 'Connect Wallet',
                description: "You have to Connect your MetaMask Wallet to view your created NFTs",
                status: 'info',
                duration: 2100,
                isClosable: true,
                position: 'up',   
              });

        }
        
      }, [])

    
      const listonpolygonmarketplace = async (nftcontractaddress,nfttokenid)=> {
        const nftprice = document.getElementById('nftprice').value;
        const listing_price = ethers.utils.parseEther(nftprice.toString());
        try{
          
            const txlisting = await (await nftmarketplacepolygoncontract.listnft(nftcontractaddress,nfttokenid,listing_price)).wait();
            if (txlisting.hash || txlisting.transactionHash){
                toast({
                    title: "Success",
                    description: "Wait for the next confirmation to complete listing process",
                    status: 'success',
                    duration: 2600,
                    isClosable: true,
                    position: 'top-left',   
                });

            }
            const txchanging = await (await createnftscontractpolygon.changelistingstatus(nfttokenid)).wait();
            if (txchanging.hash || txchanging.transactionHash){
                toast({
                    title: "Success",
                    description: "Your NFT listed successfully on the Polygon Marketplace",
                    status: 'success',
                    duration: 2600,
                    isClosable: true,
                    position: 'top-left',   
                });

            }

            getmynftspolygon();
            

        }
        catch(error){
            console.log(error);
        }
        
    }


    const listonethereummarketplace = async (nftcontractaddress,nfttokenid)=> {
        const nftprice = document.getElementById('nftprice').value;
        const listing_price = ethers.utils.parseEther(nftprice.toString());
        try{
          
            const txlisting = await (await nftmarketplaceethereumcontract.listnft(nftcontractaddress,nfttokenid,listing_price)).wait();
            if (txlisting.hash || txlisting.transactionHash){
                toast({
                    title: "Success",
                    description: "Wait for the next confirmation to complete listing process",
                    status: 'success',
                    duration: 2600,
                    isClosable: true,
                    position: 'top-left',   
                });

            }

            const txchanging = await (await createnftscontractethereum.changelistingstatus(nfttokenid)).wait();
            if (txchanging.hash || txchanging.transactionHash){
                toast({
                    title: "Success",
                    description: "Your NFT listed successfully on the Ethereum Marketplace",
                    status: 'success',
                    duration: 2600,
                    isClosable: true,
                    position: 'top-left',   
                });

            }

            getmynftsethereum();

        }
        catch(error){
            console.log(error);
        }
        
    }


    const listonavalanchemarketplace = async (nftcontractaddress,nfttokenid)=> {
        const nftprice = document.getElementById('nftprice').value;
        const listing_price = ethers.utils.parseEther(nftprice.toString());
        try{
          
            const txlisting = await (await nftmarketplaceavalanchecontract.listnft(nftcontractaddress,nfttokenid,listing_price)).wait();
            if (txlisting.hash || txlisting.transactionHash){
                toast({
                    title: "Success",
                    description: "Wait for the next confirmation to complete listing process",
                    status: 'success',
                    duration: 2600,
                    isClosable: true,
                    position: 'top-left',   
                });

            }
            const txchanging = await (await createnftscontractavalanche.changelistingstatus(nfttokenid)).wait();
            if (txchanging.hash || txchanging.transactionHash){
                toast({
                    title: "Success",
                    description: "Your NFT listed successfully on the Avalanche Marketplace",
                    status: 'success',
                    duration: 2600,
                    isClosable: true,
                    position: 'top-left',   
                });

            }
            getmynftsavalanche();
            

        }
        catch(error){
            console.log(error);
        }
        
    }


    const listonbinancemarketplace = async (nftcontractaddress,nfttokenid)=> {
        const nftprice = document.getElementById('nftprice').value;
        const listing_price = ethers.utils.parseEther(nftprice.toString());
        try{
          
            const txlisting = await (await nftmarketplacebinancecontract.listnft(nftcontractaddress,nfttokenid,listing_price)).wait();
            if (txlisting.hash || txlisting.transactionHash){
                toast({
                    title: "Success",
                    description: "Wait for the next confirmation to complete listing process",
                    status: 'success',
                    duration: 2600,
                    isClosable: true,
                    position: 'top-left',   
                });

            }

            const txchanging = await (await createnftscontractbinance.changelistingstatus(nfttokenid)).wait();
            if (txchanging.hash || txchanging.transactionHash){
                toast({
                    title: "Success",
                    description: "Your NFT listed successfully on the Binance Marketplace",
                    status: 'success',
                    duration: 2600,
                    isClosable: true,
                    position: 'top-left',   
                });

            }
            getmynftsbinance();
            

        }
        catch(error){
            console.log(error);
        }
        
    }


    
     
   
    
    if (chainid == "0x13881") {

    return (
    
      <VStack
      divider={<StackDivider borderColor='white' />}
      spacing={2}
      align='stretch'
      >   
          <Box bgGradient='linear(to-r, azure,white,azure,white)' height="1150px">
            
                { iswalletconnected ? (
                    <Flex padding={3} ml={14}>



                        {  myownnftspolygon.length > 0 ? (
                            <Box>
                                <Flex justify="center"  fontWeight='extrabold' fontSize="30px"  bgClip='text'  bgGradient='linear(to-r, cyan.800, pink.800,cyan.800,)'  padding={3} >
                                    Your Created NFTs on Polygon Network
                                </Flex>
                            <SimpleGrid columns={6} spacingX='60px' spacingY='20px'>
                                { myownnftspolygon.map((nft,idx) => (
                                    <Col >
                                            <br></br>
                                            
                                            <Box  border="1px" borderColor='lightblue' borderRadius="15px" padding={3} pb={1}  width="240px" height="490px">
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
                                                        <Box height="40px">
                                                            <Card.Title><Text fontSize={17} ml="15px" fontWeight="extrabold"> {nft.name} </Text> </Card.Title>
                                                        </Box>
                                                        
                                                        <Card.Text>
                                                            <Box height="60px">
                                                                <Text fontSize={16} ml="15px" fontWeight="bold">
                                                                    {nft.description}
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
                                                                                <a href={`https://mumbai.polygonscan.com/address/${nft.nftcontractaddress}`}> 
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
                                                                                Blockchain: Polygon
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
                                                                onClick={()=>{
                                                                    setcurrentnftcontractaddress(nft.nftcontractaddress);
                                                                    setcurrenttokenid(nft.tokenid);

                                                                    onOpen()}}
                                                          
        
                                                        >List</Button>

                                                    </Card.Footer>
                                                    
                                                    <br></br>
                                                    </VStack>
                                                </Card>
                                            </Box>
                                            
                                    </Col>
                                ))}
                            </SimpleGrid>
                            </Box>
                           
                        
                        
                       
                    ) : (
                        
                        <Flex justify="center"  fontWeight='extrabold' fontSize="43px" ml={320} bgClip='text'  bgGradient='linear(to-r, cyan.800, pink.800,cyan.800,)'  padding={50} >
                           You did not created NFTs on Mumbai Polygon Network
                        </Flex>
                    )
                    }
                     </Flex>
                     
                ) : (
                    <Flex  justify="center" fontWeight='extrabold' fontSize="37px" bgClip='text'  bgGradient='linear(to-r, blue.900, red.500)' padding={50} >
                        Connect Wallet to view your purchased NFTs
                    </Flex>

 
                )
            
                }


<Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                            <ModalHeader>List Your NFT</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>

                                <FormLabel htmlfor= "nftprice" fontSize="25px" >Price</FormLabel>
                                <Input id = "nftprice" type='number'  borderWidth={3} placeholder="Price in MATIC" height="90px" variant='outline' fontSize={22}/>

                            </ModalBody>

                            <ModalFooter>
                                
                                
                                <Button colorScheme='blue'
                                fontWeight='bold' 
                                fontSize={18}
                                borderRadius= "100px"
                                width="200px"
                                height="60px"
                                mr="90px"
                                onClick={()=>{
                                    listonpolygonmarketplace(currentnftcontractaddress,currenttokenid);
                                }}
                               
                                 >
                                   
                                    List in Marketplace
                                </Button>
                                
                            </ModalFooter>
                            </ModalContent>
                        </Modal>





                   
           
                
          </Box>


      </VStack>
      
    )

     }



     if (chainid == "0x61"){
        
    return (
    
        <VStack
        divider={<StackDivider borderColor='white' />}
        spacing={2}
        align='stretch'
        >   
            <Box bgGradient='linear(to-r, azure,white,azure,white)' height="1150px">
              
                  { iswalletconnected ? (
                      <Flex padding={3} ml={14}>
  
                          {  myownnftsbinance.length > 0 ? (
                            <Box>
                                <Flex justify="center"  fontWeight='extrabold' fontSize="30px"  bgClip='text'  bgGradient='linear(to-r, cyan.800, pink.800,cyan.800,)'  padding={3} >
                                    Your Created NFTs on Binance Network
                                </Flex>
                              <SimpleGrid columns={6} spacingX='60px' spacingY='20px'>
                                  { myownnftsbinance.map((nft,idx) => (
                                      <Col >
                                              <br></br>
                                              
                                              <Box  border="1px" borderColor='lightblue' borderRadius="15px" padding={3} pb={1}  width="240px" height="490px">
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
                                                          <Box height="40px">
                                                              <Card.Title><Text fontSize={17} ml="15px" fontWeight="extrabold"> {nft.name} </Text> </Card.Title>
                                                          </Box>
                                                          
                                                          <Card.Text>
                                                              <Box height="60px">
                                                                  <Text fontSize={16} ml="15px" fontWeight="bold">
                                                                      {nft.description}
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
                                                                                  <a href={`https://testnet.bscscan.com/address/${nft.nftcontractaddress}`}> 
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
                                                                                  Blockchain: Binance
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
                                                                  onClick={()=>{
                                                                    setcurrentnftcontractaddress(nft.nftcontractaddress);
                                                                    setcurrenttokenid(nft.tokenid);

                                                                    onOpen()}}
                                                            
          
                                                          >List</Button>
                                                      
                                                           
                                                          
                                                       
                                                          
                                                      </Card.Footer>
                                                      <br></br>
                                                      </VStack>
                                                  </Card>
                                              </Box>
                                              
                                      </Col>
                                  ))}
                              </SimpleGrid>
                              </Box>
                          
                          
                         
                      ) : (
                          
                          <Flex justify="center"  fontWeight='extrabold' fontSize="43px" ml={320} bgClip='text'  bgGradient='linear(to-r, cyan.800, pink.800,cyan.800,)'  padding={50} >
                             You did not created NFTs on Binance Smart Chain Network
                          </Flex>
                      )
                      }
                       </Flex>
                       
                  ) : (
                      <Flex  justify="center" fontWeight='extrabold' fontSize="37px" bgClip='text'  bgGradient='linear(to-r, blue.900, red.500)' padding={50} >
                          Connect Wallet to view your purchased NFTs
                      </Flex>
  
   
                  )
              
                  }
                  
                                            <Modal isOpen={isOpen} onClose={onClose}>
                                                              <ModalOverlay />
                                                              <ModalContent>
                                                              <ModalHeader>List Your NFT</ModalHeader>
                                                              <ModalCloseButton />
                                                              <ModalBody>
  
                                                                  <FormLabel htmlfor= "nftprice" fontSize="25px" >Price</FormLabel>
                                                                  <Input id = "nftprice" type='number'  borderWidth={3} placeholder="Price in BNB" height="90px" variant='outline' fontSize={22}/>
       
                                                              </ModalBody>
  
                                                              <ModalFooter>
                                                                  
                                                                  
                                                                  <Button colorScheme='blue'
                                                                  fontWeight='bold' 
                                                                  fontSize={18}
                                                                  borderRadius= "100px"
                                                                  width="200px"
                                                                  height="60px"
                                                                  mr="90px"
                                                                  onClick={()=>{
                                                                    listonbinancemarketplace(currentnftcontractaddress,currenttokenid);
                                                                }}
                                                                 
                                                                   >
                                                                     
                                                                      List in Marketplace
                                                                  </Button>
                                                                  
                                                              </ModalFooter>
                                                              </ModalContent>
                                                          </Modal>
  
  
                  
            </Box>
  
        </VStack>
      )

      }


      if (chainid == "0x5"){
        return (
            <VStack
      divider={<StackDivider borderColor='white' />}
      spacing={2}
      align='stretch'
      >   
          <Box bgGradient='linear(to-r, azure,white,azure,white)' height="1150px">
            
                { iswalletconnected ? (
                    <Flex padding={3} ml={14}>

                        {  myownnftsethereum.length > 0 ? (
                             <Box>
                                <Flex justify="center"  fontWeight='extrabold' fontSize="30px"  bgClip='text'  bgGradient='linear(to-r, cyan.800, pink.800,cyan.800,)'  padding={3} >
                                    Your Created NFTs on Ethereum Network
                                </Flex>
                            <SimpleGrid columns={6} spacingX='60px' spacingY='20px'>
                                { myownnftsethereum.map((nft,idx) => (
                                    <Col >
                                            <br></br>
                                            
                                            <Box  border="1px" borderColor='lightblue' borderRadius="15px" padding={3} pb={1}  width="240px" height="490px">
                                                <Card key={idx}   >
                                                    <VStack
                                                    divider={<StackDivider borderColor='white' />}
                                                    spacing={1}
                                                    align='stretch'
                                                    >
                                                    <Box>
                                                        <Image variant="top" src= {nft.image} width= "230px"  height="220px"   />
                                                    </Box>
                                                    <Card.Body ml="150px">
                                                        <Box height="40px">
                                                            <Card.Title><Text fontSize={17} ml="15px" fontWeight="extrabold"> {nft.name} </Text> </Card.Title>
                                                        </Box>
                                                        
                                                        <Card.Text>
                                                            <Box height="60px">
                                                                <Text fontSize={16} ml="15px" fontWeight="bold">
                                                                    {nft.description}
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
                                                                                <a href={`https://goerli.etherscan.io/address/${nft.nftcontractaddress}`}> 
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
                                                                                Blockchain: Ethereum
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
                                                                onClick={()=>{
                                                                    setcurrentnftcontractaddress(nft.nftcontractaddress);
                                                                    setcurrenttokenid(nft.tokenid);

                                                                    onOpen()}}
                                                          
        
                                                        >List</Button>
                                                    
                                                         
                                                        
                                                     
                                                       
                                                        
                                                    </Card.Footer>
                                                    <br></br>
                                                    </VStack>
                                                </Card>
                                            </Box>
                                            
                                    </Col>
                                ))}
                            </SimpleGrid>
                            </Box>
                        
                        
                       
                    ) : (
                        
                        <Flex justify="center"  fontWeight='extrabold' fontSize="43px" ml={320} bgClip='text'  bgGradient='linear(to-r, cyan.800, pink.800,cyan.800,)'  padding={50} >
                           You did not created NFTs on Goerli Ethereum Network
                        </Flex>
                    )
                    }
                     </Flex>
                     
                ) : (
                    <Flex  justify="center" fontWeight='extrabold' fontSize="37px" bgClip='text'  bgGradient='linear(to-r, blue.900, red.500)' padding={50} >
                        Connect Wallet to view your purchased NFTs
                    </Flex>

 
                )
            
                }
                 <Modal isOpen={isOpen} onClose={onClose}>
                                                            <ModalOverlay />
                                                            <ModalContent>
                                                            <ModalHeader>List Your NFT</ModalHeader>
                                                            <ModalCloseButton />
                                                            <ModalBody>

                                                                <FormLabel htmlfor= "nftprice" fontSize="25px" >Price</FormLabel>
                                                                <Input id = "nftprice" type='number'  borderWidth={3} placeholder="Price in Goerli ETH" height="90px" variant='outline' fontSize={22}/>
     
                                                            </ModalBody>

                                                            <ModalFooter>
                                                                
                                                                
                                                                <Button colorScheme='blue'
                                                                fontWeight='bold' 
                                                                fontSize={18}
                                                                borderRadius= "100px"
                                                                width="200px"
                                                                height="60px"
                                                                mr="90px"
                                                                onClick={()=>{
                                                                    listonethereummarketplace(currentnftcontractaddress,currenttokenid);
                                                                }}
                                                               
                                                                 >
                                                                   
                                                                    List in Marketplace
                                                                </Button>
                                                                
                                                            </ModalFooter>
                                                            </ModalContent>
                                                        </Modal>


           
           
                
          </Box>

      </VStack>
        )

      }


      if (chainid == "0xa869"){
        return (
            <VStack
      divider={<StackDivider borderColor='white' />}
      spacing={2}
      align='stretch'
      >   
          <Box bgGradient='linear(to-r, azure,white,azure,white)' height="1150px">
            
                { iswalletconnected ? (
                    <Flex padding={3} ml={14}>

                        {  myownnftsavalanche.length > 0 ? (
                              <Box>
                                <Flex justify="center"  fontWeight='extrabold' fontSize="30px"  bgClip='text'  bgGradient='linear(to-r, cyan.800, pink.800,cyan.800,)'  padding={3} >
                                    Your Created NFTs on Avalanche Network
                                </Flex>
                            <SimpleGrid columns={6} spacingX='60px' spacingY='20px'>
                                { myownnftsavalanche.map((nft,idx) => (
                                    <Col >
                                            <br></br>
                                            
                                            <Box  border="1px" borderColor='lightblue' borderRadius="15px" padding={3} pb={1}  width="240px" height="490px">
                                                <Card key={idx}   >
                                                    <VStack
                                                    divider={<StackDivider borderColor='white' />}
                                                    spacing={1}
                                                    align='stretch'
                                                    >
                                                    <Box>
                                                        <Image variant="top" src= {nft.image} width= "230px"  height="220px"   />
                                                    </Box>
                                                    <Card.Body ml="150px">
                                                        <Box height="40px">
                                                            <Card.Title><Text fontSize={17} ml="15px" fontWeight="extrabold"> {nft.name} </Text> </Card.Title>
                                                        </Box>
                                                        
                                                        <Card.Text>
                                                            <Box height="60px">
                                                                <Text fontSize={16} ml="15px" fontWeight="bold">
                                                                    {nft.description}
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
                                                                onClick={()=>{
                                                                    setcurrentnftcontractaddress(nft.nftcontractaddress);
                                                                    setcurrenttokenid(nft.tokenid);

                                                                    onOpen()}}
                                                          
        
                                                        >List</Button>
                                                    
                                                         
                                                        
                                                     
                                                        
                                                    </Card.Footer>
                                                    <br></br>
                                                    </VStack>
                                                </Card>
                                            </Box>
                                            
                                    </Col>
                                ))}
                            </SimpleGrid>
                            </Box>
                        
                        
                       
                    ) : (
                        
                        <Flex justify="center"  fontWeight='extrabold' fontSize="43px" ml={320} bgClip='text'  bgGradient='linear(to-r, cyan.800, pink.800,cyan.800,)'  padding={50} >
                           You did not created NFTs on Avalanche Network
                        </Flex>
                    )
                    }
                     </Flex>
                     
                ) : (
                    <Flex  justify="center" fontWeight='extrabold' fontSize="37px" bgClip='text'  bgGradient='linear(to-r, blue.900, red.500)' padding={50} >
                        Connect Wallet to view your purchased NFTs
                    </Flex>

 
                )
            
                }
                <Modal isOpen={isOpen} onClose={onClose}>
                                                            <ModalOverlay />
                                                            <ModalContent>
                                                            <ModalHeader>List Your NFT</ModalHeader>
                                                            <ModalCloseButton />
                                                            <ModalBody>

                                                                <FormLabel htmlfor= "nftprice" fontSize="25px" >Price</FormLabel>
                                                                <Input id = "nftprice" type='number'  borderWidth={3} placeholder="Price in AVAX" height="90px" variant='outline' fontSize={22}/>
     
                                                            </ModalBody>

                                                            <ModalFooter>
                                                                
                                                                
                                                                <Button colorScheme='blue'
                                                                fontWeight='bold' 
                                                                fontSize={18}
                                                                borderRadius= "100px"
                                                                width="200px"
                                                                height="60px"
                                                                mr="90px"
                                                                onClick={()=>{
                                                                    listonavalanchemarketplace(currentnftcontractaddress,currenttokenid);
                                                                }}
                                                               
                                                                 >
                                                                   
                                                                    List in Marketplace
                                                                </Button>
                                                                
                                                            </ModalFooter>
                                                            </ModalContent>
                                                        </Modal>
                                                        


           
           
                
          </Box>

      </VStack>
        )

      }
    



    
};
export default MYCREATEDNFTS;