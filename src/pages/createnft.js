import {Button , Select  , Container, Flex , FormControl , FormLabel, Input,HStack,Box,VStack,StackDivider} from '@chakra-ui/react';
import { ethers } from 'ethers';
import { useToast } from '@chakra-ui/react'
import { useState , useEffect} from 'react';
import { NFTStorage } from 'nft.storage';


const Create = ({accounts,chainid,connectwallet,createnftscontractpolygon,createnftscontractethereum,createnftscontractavalanche,createnftscontractbinance}) => {
    const iswalletconnected = Boolean(accounts[0]);
    const [welcomestatement , setwelcomestatement] = useState("Create NFT");
    const [hyphen , sethyphen] = useState("");
    const [blockchainname , setblockchainname] = useState("");
    
    const toast = useToast();
 

    var NFT_STORAGE_API_KEY= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGFFMTg5NTcxNWUzMzY5MzcyYkNlZDBBNTJkREQ2OTFlZjQxMGIzNWEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3MDEwNzk1NzYyMCwibmFtZSI6Im11bHRpY2hhaW5uZnRtYXJrZXRwbGFjZSJ9.4XM7yNLTJYFtIr7DkXHHkoApDiaFAO1z6KoPY2OIcYw';

   
   
    const myFunction = async() => {
        const blockchain = document.getElementById("chooseblockchain");
        var blockchainname = blockchain.options[blockchain.selectedIndex].value;
        
        if (blockchainname=="Ethereum"){
            sethyphen("-");
            setblockchainname("Goerli Ethereum Testnet");
            
            if (chainid === "0x5"){
            }
            else{
                var targetNetworkId = "0x5";
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: targetNetworkId }],
                  });
                  
            }

            

        }
        if (blockchainname=="Polygon"){
            sethyphen("-");
            setblockchainname("Mumbai Polygon Testnet");
            if (chainid === "0x13881"){
            }
            else{
                var targetNetworkId = "0x13881";
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: targetNetworkId }],
                  });
                  
            }

        }

        if (blockchainname=="Avalanche"){
            sethyphen("-");
            setblockchainname("Avalanche Testnet");
            if (chainid === "0xa869"){
            }
            else{
                var targetNetworkId = "0xa869";
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: targetNetworkId }],
                  });
                  
            }
            
        }
        if (blockchainname=="BinanceSmartChain"){
            sethyphen("-");
            setblockchainname("Binance Smart Chain Testnet");
            if (chainid === "0x61"){
            }
            else{
                var targetNetworkId = "0x61";
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: targetNetworkId }],
                  });
                  
            }
            
        }
      }
      const createandmintnft = async () =>{
        const nftname = document.getElementById('nftname').value;
        const nftdescription = document.getElementById('nftdescription').value;
        const nftuploadedimage = document.getElementById("uploadnft").files;
        console.log(createnftscontractpolygon.address)

        if (iswalletconnected == true ){
            try {
                const client = new NFTStorage({
                token: NFT_STORAGE_API_KEY
                });
    
                const metadata = await client.store({
                    name: nftname,
                    description: nftdescription,
                    image: nftuploadedimage[0],
                })
    
                const metadata_before_edit = metadata.url;
                const nftmetadatalink = metadata_before_edit.replace("ipfs://", "https://ipfs.io/ipfs/");

                if (chainid=="0x13881"){
                    const tx = await (await createnftscontractpolygon.createNFT(nftmetadatalink)).wait();
                    if (tx.hash || tx.transactionHash){
                        toast({
                            title: 'NFT metadata uploaded on NFT.Storage',
                            description: "Congratulations! You have created your NFT successfully on Polygon blockchain",
                            status: 'success',
                            duration: 2600,
                            isClosable: true,
                            position: 'top-left',   
                        });
                    }
                }


                if (chainid=="0x5"){
                    const tx = await (await createnftscontractethereum.createNFT(nftmetadatalink)).wait();
                    if (tx.hash || tx.transactionHash){
                        toast({
                            title: 'NFT metadata uploaded on NFT.Storage',
                            description: "Congratulations! You have created your NFT successfully on Ethereum blockchain",
                            status: 'success',
                            duration: 2600,
                            isClosable: true,
                            position: 'top-left',   
                        });
                    }
                }

                if (chainid=="0xa869"){
                    console.log(createnftscontractavalanche)
                    const tx = await (await createnftscontractavalanche.createNFT(nftmetadatalink)).wait();
                    if (tx.hash || tx.transactionHash){
                        toast({
                            title: 'NFT metadata uploaded on NFT.Storage',
                            description: "Congratulations! You have created your NFT successfully on Avalanche blockchain",
                            status: 'success',
                            duration: 2600,
                            isClosable: true,
                            position: 'top-left',   
                        });
                    }
                }

                if (chainid=="0x61"){
                    const tx = await (await createnftscontractbinance.createNFT(nftmetadatalink)).wait();
                    if (tx.hash || tx.transactionHash){
                        toast({
                            title: 'NFT metadata uploaded on NFT.Storage',
                            description: "Congratulations! You have created your NFT successfully on Binance blockchain",
                            status: 'success',
                            duration: 2600,
                            isClosable: true,
                            position: 'top-left',   
                        });
                    }
                }
              
            }
            catch (error) {
                console.error(error);
            }

        }
        

      }
   
    
    return (
       
        <VStack
        divider={<StackDivider borderColor='white' />}
        spacing={2}
        align='stretch'
        >   
            <Box bgGradient='linear(to-r, azure,white,azure,white)' height="889px">
            <br></br>  <br></br>
            <Flex justify="center" fontWeight='extrabold' fontSize="45px" bgClip='text'  bgGradient='linear(to-r, cyan.800, pink.700)'>
                    {welcomestatement} {hyphen} {blockchainname}
            </Flex>
            <br></br>
            <Container  border='1px' borderColor='black' height="660px" borderWidth={1} borderRadius= "30px">
                <FormControl justify="center"  isRequired>
                    <br></br>
                    <FormLabel htmlfor= "nftname" fontSize="25px" >Name</FormLabel>
                    <Input id = "nftname" type='text' placeholder="My custom NFT" variant='outline' borderWidth={3}  fontSize={22}   height="60px"  isRequired />
                    <br></br><br></br>
                    <FormLabel htmlfor= "nftdescription" fontSize="25px" >Description</FormLabel>
                    <Input id = "nftdescription" type='text'  borderWidth={3} placeholder="My custom NFT description" height="90px" variant='outline' fontSize={22}/>
                    <br></br><br></br>
                    <FormLabel tmlfor= "nftprice" fontSize="25px">Blockchain</FormLabel>
                    <Select id="chooseblockchain"  height="60px" width="485px" borderWidth={3} fontSize={20} onChange={myFunction}>

                                    <option value="" disabled selected hidden>Choose Blockchain</option>
                                    <option value='Ethereum'>
                                        Goerli Ethereum Testnet
                                    </option>
                                    <option value='Polygon'>Mumbai Polygon Testnet</option>
                                    <option value='Avalanche'>Avalanche Testnet</option>
                                    <option value='BinanceSmartChain'>Binance Smart Chain Testnet</option>
                                  
                    </Select>
                    <br></br>
                    <Flex justify="center" fontWeight='bold' fontSize="25px" bgClip='text'  bgGradient='linear(to-r, red.900, blue.500)'>
                        Upload NFT image
                    </Flex>
                    <br></br>
                    <Flex justify="center" ml="100px">
                        <input id= 'uploadnft' type='file' justify="center" />
                    </Flex>
                    <br></br>
                    <Flex justify="center">
                        <Button 
                            backgroundColor="gray"
                            fontWeight='extrabold'
                            colorScheme='green' 
                            variant='solid'
                            borderRadius= "20px"
                            width="230px"
                            height="65px"
                            fontSize={28}
                            onClick={createandmintnft}
                            type='submit'
                            
                            >Create NFT
                        </Button>
                    </Flex>


                </FormControl>
            </Container>
            </Box>
        </VStack>
    );
 
};
export default Create;