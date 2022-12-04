import {  useToast } from '@chakra-ui/react'
import {Image,Box, VStack,StackDivider ,Text,Button,Flex ,SimpleGrid} from '@chakra-ui/react';
import {Menu,MenuButton, MenuList,MenuItem} from '@chakra-ui/react'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton , FormLabel, Input} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { ethers } from 'ethers';
import { Card,Col } from "react-bootstrap";
import { useState ,useEffect} from 'react';

const MYPURCHASEDNFTS = ({accounts ,chainid,createnftscontractpolygon,createnftscontractethereum,createnftscontractavalanche,createnftscontractbinance,nftmarketplacepolygoncontract,nftmarketplaceethereumcontract, nftmarketplaceavalanchecontract,nftmarketplacebinancecontract}) => {
    const iswalletconnected = Boolean(accounts[0]);

    const [mypurchasednftspolygon, setmypurchasednftspolygon] = useState([]);
    const [mypurchasednftsethereum, setmypurchasednftsethereum] = useState([]);
    const [mypurchasednftsavalanche, setmypurchasednftsavalanche] = useState([]);
    const [mypurchasednftsbinance, setmypurchasednftsbinance] = useState([]);

    const [currentnftcontractaddress, setcurrentnftcontractaddress] = useState("");
    const [currenttokenid, setcurrenttokenid] = useState();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const toast = useToast();
  
    
    const getmypurchasednftsonpolygon = async () => {
      const purchasednfts = await nftmarketplacepolygoncontract.getmypurchasednfts();
      const purchasednftscount = purchasednfts.length;
      let mypurchasednfts = [];

      for (let i = 0 ; i< purchasednftscount ; i++){
        if(purchasednfts[i].istransferred == 0  && purchasednfts[i].islisted == 0){
              const metadataurl = await createnftscontractpolygon.tokenURI(purchasednfts[i].tokenid);
              const responsefrom_metadata = await fetch(metadataurl);
              const metadata = await responsefrom_metadata.json();
              const imageurl = metadata.image;
              const ipfsimageurl = imageurl.replace("ipfs://", "https://ipfs.io/ipfs/");

              mypurchasednfts.push({ image: ipfsimageurl , name: metadata.name, description: metadata.description , seller: purchasednfts[i].seller, itemid: Number(purchasednfts[i].itemid), nftcontractaddress: purchasednfts[i].nftcontractaddress , tokenid : Number(purchasednfts[i].tokenid) });
        }
      }
      setmypurchasednftspolygon(mypurchasednfts);
    }


    const getmypurchasednftsonethereum = async () => {
        const purchasednfts = await nftmarketplaceethereumcontract.getmypurchasednfts();
        const purchasednftscount = purchasednfts.length;
        let mypurchasednfts = [];
  
        for (let i = 0 ; i< purchasednftscount ; i++){
            if(purchasednfts[i].istransferred ==0  && purchasednfts[i].islisted ==0){
                const metadataurl = await createnftscontractethereum.tokenURI(purchasednfts[i].tokenid);
                const responsefrom_metadata = await fetch(metadataurl);
                const metadata = await responsefrom_metadata.json();
                const imageurl = metadata.image;
                const ipfsimageurl = imageurl.replace("ipfs://", "https://ipfs.io/ipfs/");
  
                mypurchasednfts.push({ image: ipfsimageurl , name: metadata.name, description: metadata.description , seller: purchasednfts[i].seller, itemid: Number(purchasednfts[i].itemid), nftcontractaddress: purchasednfts[i].nftcontractaddress , tokenid : Number(purchasednfts[i].tokenid) });
            }
        }
        setmypurchasednftsethereum(mypurchasednfts);
      }

      const getmypurchasednftsonavalanche = async () => {
        const purchasednfts = await nftmarketplaceavalanchecontract.getmypurchasednfts();
        const purchasednftscount = purchasednfts.length;
        let mypurchasednfts = [];
  
        for (let i = 0 ; i< purchasednftscount ; i++){
            if(purchasednfts[i].istransferred ==0  && purchasednfts[i].islisted ==0 ){
                const metadataurl = await createnftscontractavalanche.tokenURI(purchasednfts[i].tokenid);
                const responsefrom_metadata = await fetch(metadataurl);
                const metadata = await responsefrom_metadata.json();
                const imageurl = metadata.image;
                const ipfsimageurl = imageurl.replace("ipfs://", "https://ipfs.io/ipfs/");
  
                mypurchasednfts.push({ image: ipfsimageurl , name: metadata.name, description: metadata.description , seller: purchasednfts[i].seller, itemid: Number(purchasednfts[i].itemid), nftcontractaddress: purchasednfts[i].nftcontractaddress , tokenid : Number(purchasednfts[i].tokenid) });
            }
        }
        setmypurchasednftsavalanche(mypurchasednfts);
      }


      const getmypurchasednftsonbinance = async () => {
        const purchasednfts = await nftmarketplacebinancecontract.getmypurchasednfts();
        const purchasednftscount = purchasednfts.length;
        let mypurchasednfts = [];
  
        for (let i = 0 ; i< purchasednftscount ; i++){
            if(purchasednfts[i].istransferred ==0 && purchasednfts[i].islisted ==0){
                const metadataurl = await createnftscontractbinance.tokenURI(purchasednfts[i].tokenid);
                const responsefrom_metadata = await fetch(metadataurl);
                const metadata = await responsefrom_metadata.json();
                const imageurl = metadata.image;
                const ipfsimageurl = imageurl.replace("ipfs://", "https://ipfs.io/ipfs/");
  
                mypurchasednfts.push({ image: ipfsimageurl , name: metadata.name, description: metadata.description , seller: purchasednfts[i].seller, itemid: Number(purchasednfts[i].itemid), nftcontractaddress: purchasednfts[i].nftcontractaddress , tokenid : Number(purchasednfts[i].tokenid) });
            }
        }
        setmypurchasednftsbinance(mypurchasednfts);
      }


    const listonpolygonmarketplace = async (nftcontractaddress,nfttokenid)=> {
      const nftprice = document.getElementById('nftprice').value;
      const listing_price = ethers.utils.parseEther(nftprice.toString());
      
      try{
          const approvetx = await (await createnftscontractpolygon.approve(nftmarketplacepolygoncontract.address,nfttokenid)).wait();
          if (approvetx.hash || approvetx.transactionHash){
            toast({
                title: "Approval Success",
                description: "Wait for next confirmatin to complete listing process",
                status: 'success',
                duration: 2600,
                isClosable: true,
                position: 'top-left',   
            });

        }

          const txlisting = await (await nftmarketplacepolygoncontract.listnft(nftcontractaddress,nfttokenid,listing_price)).wait();
          if (txlisting.hash || txlisting.transactionHash){
              toast({
                  title: "Success",
                  description: "Your NFT listed successfully on the Polygon Marketplace",
                  status: 'success',
                  duration: 2600,
                  isClosable: true,
                  position: 'top-left',   
              });

          }

          getmypurchasednftsonpolygon();

      }
      catch(error){
          console.log(error);
      }
  }


  const listonethereummarketplace = async (nftcontractaddress,nfttokenid)=> {
    const nftprice = document.getElementById('nftprice').value;
    const listing_price = ethers.utils.parseEther(nftprice.toString());
    try{
        
            const approvetx = await (await createnftscontractethereum.approve(nftmarketplaceethereumcontract.address,nfttokenid)).wait();
            if (approvetx.hash || approvetx.transactionHash){
              toast({
                  title: "Approval Success",
                  description: "Wait for next confirmatin to complete listing process",
                  status: 'success',
                  duration: 2600,
                  isClosable: true,
                  position: 'top-left',   
              });
  
          }
      
        const txlisting = await (await nftmarketplaceethereumcontract.listnft(nftcontractaddress,nfttokenid,listing_price)).wait();
        if (txlisting.hash || txlisting.transactionHash){
            toast({
                title: "Success",
                description: "Your NFT listed successfully on the Ethereum Marketplace",
                status: 'success',
                duration: 2600,
                isClosable: true,
                position: 'top-left',   
            });

        }

        

    }
    catch(error){
        console.log(error);
    }
}

const listonavalanchemarketplace = async (nftcontractaddress,nfttokenid)=> {
    const nftprice = document.getElementById('nftprice').value;
    const listing_price = ethers.utils.parseEther(nftprice.toString());
    try{
        const approvetx = await (await createnftscontractavalanche.approve(nftmarketplaceavalanchecontract.address,nfttokenid)).wait();
        if (approvetx.hash || approvetx.transactionHash){
          toast({
              title: "Approval Success",
              description: "Wait for next confirmatin to complete listing process",
              status: 'success',
              duration: 2600,
              isClosable: true,
              position: 'top-left',   
          });

      }
        const txlisting = await (await nftmarketplaceavalanchecontract.listnft(nftcontractaddress,nfttokenid,listing_price)).wait();
        if (txlisting.hash || txlisting.transactionHash){
            toast({
                title: "Success",
                description: "Your NFT listed successfully on the Avalanche Marketplace",
                status: 'success',
                duration: 2600,
                isClosable: true,
                position: 'top-left',   
            });

        }

       
    }
    catch(error){
        console.log(error);
    }
}

const listonbinancemarketplace = async (nftcontractaddress,nfttokenid)=> {
    const nftprice = document.getElementById('nftprice').value;
    const listing_price = ethers.utils.parseEther(nftprice.toString());
    try{
        const approvetx = await (await createnftscontractbinance.approve(nftmarketplacebinancecontract.address,nfttokenid)).wait();
        if (approvetx.hash || approvetx.transactionHash){
          toast({
              title: "Approval Success",
              description: "Wait for next confirmatin to complete listing process",
              status: 'success',
              duration: 2600,
              isClosable: true,
              position: 'top-left',   
          });

      }
        const txlisting = await (await nftmarketplacebinancecontract.listnft(nftcontractaddress,nfttokenid,listing_price)).wait();
        if (txlisting.hash || txlisting.transactionHash){
            toast({
                title: "Success",
                description: "Your NFT listed successfully on the Binance Marketplace",
                status: 'success',
                duration: 2600,
                isClosable: true,
                position: 'top-left',   
            });

        }

        

    }
    catch(error){
        console.log(error);
    }
}



    useEffect(() => {
        if (iswalletconnected == true && chainid==="0x13881"){
            getmypurchasednftsonpolygon();
        }
        if (iswalletconnected == true && chainid==="0x5"){
            getmypurchasednftsonethereum();
        }
        if (iswalletconnected == true && chainid==="0xa869"){
            getmypurchasednftsonavalanche();
        }
        if (iswalletconnected == true && chainid==="0x61"){
            getmypurchasednftsonbinance();
        }
     
      
        if (iswalletconnected == false) {
            toast({
                title: 'Connect Wallet',
                description: "You have to Connect your MetaMask Wallet to view your purchased NFTs",
                status: 'info',
                duration: 2100,
                isClosable: true,
                position: 'up',   
              });

        }
        
      }, [])

    


    

   
    
      if (chainid === "0x13881") {

        return (
        
          <VStack
          divider={<StackDivider borderColor='white' />}
          spacing={2}
          align='stretch'
          >   
              <Box bgGradient='linear(to-r, azure,white,azure,white)' height="1150px">
                
                    { iswalletconnected ? (
                        <Flex padding={3} ml={14}>
    
    
    
                            {  mypurchasednftspolygon.length > 0 ? (
                                <Box>
                                    <Flex justify="center"  fontWeight='extrabold' fontSize="30px"  bgClip='text'  bgGradient='linear(to-r, cyan.800, pink.800,cyan.800,)'  padding={3} >
                                        Your Purchased NFTs on Polygon Network
                                    </Flex>
                                <SimpleGrid columns={6} spacingX='60px' spacingY='20px'>
                                    { mypurchasednftspolygon.map((nft,idx) => (
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
                               You did not Purchased NFTs on Mumbai Polygon Network
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




         if (chainid === "0x5") {

            return (
            
              <VStack
              divider={<StackDivider borderColor='white' />}
              spacing={2}
              align='stretch'
              >   
                  <Box bgGradient='linear(to-r, azure,white,azure,white)' height="1150px">
                    
                        { iswalletconnected ? (
                            <Flex padding={3} ml={14}>
        
        
        
                                {  mypurchasednftsethereum.length > 0 ? (
                                    <Box>
                                        <Flex justify="center"  fontWeight='extrabold' fontSize="30px"  bgClip='text'  bgGradient='linear(to-r, cyan.800, pink.800,cyan.800,)'  padding={3} >
                                            Your Purchased NFTs on Ethereum Network
                                        </Flex>
                                    <SimpleGrid columns={6} spacingX='60px' spacingY='20px'>
                                        { mypurchasednftsethereum.map((nft,idx) => (
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
                                   You did not Purchased NFTs on Goreli Ethereum Network
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
                                        <Input id = "nftprice" type='number'  borderWidth={3} placeholder="Price in Goreli ETH" height="90px" variant='outline' fontSize={22}/>
        
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




             if (chainid === "0xa869") {

                return (
                
                  <VStack
                  divider={<StackDivider borderColor='white' />}
                  spacing={2}
                  align='stretch'
                  >   
                      <Box bgGradient='linear(to-r, azure,white,azure,white)' height="1150px">
                        
                            { iswalletconnected ? (
                                <Flex padding={3} ml={14}>
            
            
            
                                    {  mypurchasednftsavalanche.length > 0 ? (
                                        <Box>
                                            <Flex justify="center"  fontWeight='extrabold' fontSize="30px"  bgClip='text'  bgGradient='linear(to-r, cyan.800, pink.800,cyan.800,)'  padding={3} >
                                                Your Purchased NFTs on Avalanche Test Network
                                            </Flex>
                                        <SimpleGrid columns={6} spacingX='60px' spacingY='20px'>
                                            { mypurchasednftsavalanche.map((nft,idx) => (
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
                                       You did not Purchased NFTs on Avalanche Test Network
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
        
         
    

                 if (chainid === "0x61") {

                    return (
                    
                      <VStack
                      divider={<StackDivider borderColor='white' />}
                      spacing={2}
                      align='stretch'
                      >   
                          <Box bgGradient='linear(to-r, azure,white,azure,white)' height="1150px">
                            
                                { iswalletconnected ? (
                                    <Flex padding={3} ml={14}>
                
                
                
                                        {  mypurchasednftsbinance.length > 0 ? (
                                            <Box>
                                                <Flex justify="center"  fontWeight='extrabold' fontSize="30px"  bgClip='text'  bgGradient='linear(to-r, cyan.800, pink.800,cyan.800,)'  padding={3} >
                                                    Your Purchased NFTs on Binance Chain Test Network
                                                </Flex>
                                            <SimpleGrid columns={6} spacingX='60px' spacingY='20px'>
                                                { mypurchasednftsbinance.map((nft,idx) => (
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
                                                                                                Blockchain: Binance Chain
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
                                           You did not Purchased NFTs on Binance Chain Network
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
            
     
   
    
   
    
};
export default MYPURCHASEDNFTS;