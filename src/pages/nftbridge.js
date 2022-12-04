import { useToast } from '@chakra-ui/react'
import {FormControl,Box,Select, VStack,StackDivider ,FormLabel,Input,Button,Flex ,Container} from '@chakra-ui/react';

import { useState } from 'react';

const NFTBRIDGE = ({accounts ,chainid,createnftscontractpolygon,createnftscontractethereum,createnftscontractavalanche,createnftscontractbinance,nftmarketplacepolygoncontract,nftmarketplaceethereumcontract, nftmarketplaceavalanchecontract,nftmarketplacebinancecontract}) => {

    const toast = useToast();
    const [tokenuri, settokenuri] = useState("");

    const [sourceblockchainbridge, setsourceblockchainbridge] = useState("");
    


    const myFunction1 = async() => {
        const blockchain = document.getElementById("choosesourceblockchain");
        var sourceblockchainname = blockchain.options[blockchain.selectedIndex].value;
        
        if (sourceblockchainname==="Ethereum"){
        
            
            if (chainid === "0x5"){
            }
            else{
                var targetNetworkId = "0x5";
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: targetNetworkId }],
                  });
                  window.location.reload()
            }

            

        }
        if (sourceblockchainname==="Polygon"){
         
            if (chainid === "0x13881"){
            }
            else{
                var targetNetworkId = "0x13881";
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: targetNetworkId }],
                  });
                  window.location.reload()
            }

        }

        if (sourceblockchainname==="Avalanche"){
        
            if (chainid === "0xa869"){
            }
            else{
                var targetNetworkId = "0xa869";
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: targetNetworkId }],
                  });
                  window.location.reload()
            }
            
        }
        if (sourceblockchainname==="BinanceSmartChain"){
      
            if (chainid === "0x61"){
            }
            else{
                var targetNetworkId = "0x61";
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: targetNetworkId }],
                  });
                  window.location.reload()
            }
            
        }
      }



      const myFunction2 = async() => {
        const blockchain = document.getElementById("choosedestinationblockchain");
        var destinationblockchainname = blockchain.options[blockchain.selectedIndex].value;
        
        if (destinationblockchainname==="Ethereum"){
        
            
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
        if (destinationblockchainname==="Polygon"){
         
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

        if (destinationblockchainname==="Avalanche"){
        
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
        if (destinationblockchainname==="BinanceSmartChain"){
      
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

      const depositinvault = async () => {
        const sourceblockchain = document.getElementById("choosesourceblockchain");
        const createdorpurchased = document.getElementById("createdorpurchased").value;
        var sourceblockchainname = sourceblockchain.options[sourceblockchain.selectedIndex].value;
        const tokenid = document.getElementById('tokenid').value;
        try{

        if (createdorpurchased === "created"){
           
            if (sourceblockchainname === "Ethereum"){
               setsourceblockchainbridge("Ethereum")
                const gettokenuri = await createnftscontractethereum.tokenURI(tokenid);
                settokenuri(gettokenuri);
                
                const transfernft_tx = await (await createnftscontractethereum.transfernfts(tokenid)).wait();
                if (transfernft_tx.hash || transfernft_tx.transactionHash){
                    toast({
                        title: "Deposit NFT in vault success",
                        description: "Choose your destination blockchain and then click on Transfer NFT",
                        status: 'success',
                        duration: 2600,
                        isClosable: true,
                        position: 'top-left',   
                    });
        
                } 
            }

            if (sourceblockchainname === "Polygon"){
                setsourceblockchainbridge("Polygon")
                const gettokenuri = await createnftscontractpolygon.tokenURI(tokenid);
                settokenuri(gettokenuri);
                const transfernft_tx = await (await createnftscontractpolygon.transfernfts(tokenid)).wait();
                if (transfernft_tx.hash || transfernft_tx.transactionHash){
                    toast({
                        title: "Deposit NFT in vault success",
                        description: "Choose your destination blockchain and then click on Transfer NFT",
                        status: 'success',
                        duration: 2600,
                        isClosable: true,
                        position: 'top-left',   
                    });
        
                }
            }

            if (sourceblockchainname === "Avalanche"){
                setsourceblockchainbridge("Avalanche")
                const gettokenuri = await createnftscontractavalanche.tokenURI(tokenid);
                settokenuri(gettokenuri);
            
                const transfernft_tx = await (await createnftscontractavalanche.transfernfts(tokenid)).wait();
                if (transfernft_tx.hash || transfernft_tx.transactionHash){
                    toast({
                        title: "Deposit NFT in vault success",
                        description: "Choose your destination blockchain and then click on Transfer NFT",
                        status: 'success',
                        duration: 2600,
                        isClosable: true,
                        position: 'top-left',   
                    });
        
                }
            }

            if (sourceblockchainname === "BinanceSmartChain"){
                setsourceblockchainbridge("BinanceSmartChain")
                const gettokenuri = await createnftscontractbinance.tokenURI(tokenid);
                settokenuri(gettokenuri);
                const transfernft_tx = await (await createnftscontractbinance.transfernfts(tokenid)).wait();
                if (transfernft_tx.hash || transfernft_tx.transactionHash){
                    toast({
                        title: "Deposit NFT in vault success",
                        description: "Choose your destination blockchain and then click on Transfer NFT",
                        status: 'success',
                        duration: 2600,
                        isClosable: true,
                        position: 'top-left',   
                    });
        
                }
            }

        }




        if (createdorpurchased === "purchased"){
           
            if (sourceblockchainname === "Ethereum"){
                setsourceblockchainbridge("Ethereum")
                const gettokenuri = await createnftscontractethereum.tokenURI(tokenid);
                settokenuri(gettokenuri);
                const approvetx = await (await createnftscontractethereum.approve(nftmarketplaceethereumcontract.address,tokenid)).wait();
                if (approvetx.hash || approvetx.transactionHash){
                  toast({
                      title: "Approval Success",
                      description: "Wait for next confirmatin to complete NFT transferring  process",
                      status: 'success',
                      duration: 2600,
                      isClosable: true,
                      position: 'top-left',   
                  });
                }
                const transfernft_tx = await (await nftmarketplaceethereumcontract.transfernfts(tokenid)).wait();
                
                if (transfernft_tx.hash || transfernft_tx.transactionHash){
                    toast({
                        title: "Deposit NFT in vault success",
                        description: "Choose your destination blockchain and then click on Transfer NFT",
                        status: 'success',
                        duration: 2600,
                        isClosable: true,
                        position: 'top-left',   
                    });
        
                }
           
            }

            if (sourceblockchainname === "Polygon"){
                setsourceblockchainbridge("Polygon")
                const gettokenuri = await createnftscontractpolygon.tokenURI(tokenid);
                settokenuri(gettokenuri);
                const approvetx = await (await createnftscontractpolygon.approve(nftmarketplacepolygoncontract.address,tokenid)).wait();
                if (approvetx.hash || approvetx.transactionHash){
                  toast({
                      title: "Approval Success",
                      description: "Wait for next confirmatin to complete NFT transferring  process",
                      status: 'success',
                      duration: 2600,
                      isClosable: true,
                      position: 'top-left',   
                  });
                }
                const transfernft_tx = await (await nftmarketplacepolygoncontract.transfernfts(tokenid)).wait();
                if (transfernft_tx.hash || transfernft_tx.transactionHash){
                    toast({
                        title: "Deposit NFT in vault success",
                        description: "Choose your destination blockchain and then click on Transfer NFT",
                        status: 'success',
                        duration: 2600,
                        isClosable: true,
                        position: 'top-left',   
                    });
        
                }
           
            }

            if (sourceblockchainname === "Avalanche"){
                setsourceblockchainbridge("Avalanche")
                const gettokenuri = await createnftscontractavalanche.tokenURI(tokenid);
                settokenuri(gettokenuri);
                const approvetx = await (await createnftscontractavalanche.approve(nftmarketplaceavalanchecontract.address,tokenid)).wait();
                if (approvetx.hash || approvetx.transactionHash){
                  toast({
                      title: "Approval Success",
                      description: "Wait for next confirmatin to complete NFT transferring  process",
                      status: 'success',
                      duration: 2600,
                      isClosable: true,
                      position: 'top-left',   
                  });
                }
                const transfernft_tx = await (await nftmarketplaceavalanchecontract.transfernfts(tokenid)).wait();
                if (transfernft_tx.hash || transfernft_tx.transactionHash){
                    toast({
                        title: "Deposit NFT in vault success",
                        description: "Choose your destination blockchain and then click on Transfer NFT",
                        status: 'success',
                        duration: 2600,
                        isClosable: true,
                        position: 'top-left',   
                    });
        
                }
            }

            if (sourceblockchainname === "BinanceSmartChain"){
                setsourceblockchainbridge("BinanceSmartChain")
                const gettokenuri = await createnftscontractbinance.tokenURI(tokenid);
                settokenuri(gettokenuri);
                const approvetx = await (await createnftscontractbinance.approve(nftmarketplacebinancecontract.address,tokenid)).wait();
                if (approvetx.hash || approvetx.transactionHash){
                  toast({
                      title: "Approval Success",
                      description: "Wait for next confirmatin to complete NFT transferring  process",
                      status: 'success',
                      duration: 2600,
                      isClosable: true,
                      position: 'top-left',   
                  });
                }
                const transfernft_tx = await (await nftmarketplacebinancecontract.transfernfts(tokenid)).wait();
                if (transfernft_tx.hash || transfernft_tx.transactionHash){
                    toast({
                        title: "Deposit NFT in vault success",
                        description: "Choose your destination blockchain and then click on Transfer NFT",
                        status: 'success',
                        duration: 2600,
                        isClosable: true,
                        position: 'top-left',   
                    });
        
                }
            }

        }
    }
    catch(error){
        if (error.reason === "execution reverted: you do not own that nft"){
            toast({
                title: "Ownership error",
                description: "you do not own that NFT",
                status: 'error',
                duration: 2300,
                isClosable: true,
                position: 'top-left',   
            });
        }
        
    }


      
    }


      const transfernfts = async () => {
        const destinationblockchain = document.getElementById("choosedestinationblockchain");
        var destinationblockchainname = destinationblockchain.options[destinationblockchain.selectedIndex].value;

                if (sourceblockchainbridge === "Polygon" && destinationblockchainname === "Polygon"){
                    toast({
                        title: 'Error on transferring NFT',
                        description: "You could not transfer nfts across same blockchain",
                        status: 'error',
                        duration: 2000,
                        isClosable: true,
                        position: 'top-left',   
                    });

                }
                if (sourceblockchainbridge !== "Polygon" && destinationblockchainname === "Polygon"){
                    const createonpoly_tx = await (await createnftscontractpolygon.createNFT(tokenuri)).wait();
                    if (createonpoly_tx.hash || createonpoly_tx.transactionHash){
                        toast({
                            title: "Success",
                            description: "Your NFT is Successfully transferred to Polygon Blockchain",
                            status: 'success',
                            duration: 2500,
                            isClosable: true,
                            position: 'top-left',   
                        });
            
                    }

                }



                if (sourceblockchainbridge === "Ethereum" && destinationblockchainname === "Ethereum"){
                    toast({
                        title: 'Error on transferring NFT',
                        description: "You could not transfer nfts across same blockchain",
                        status: 'error',
                        duration: 2000,
                        isClosable: true,
                        position: 'top-left',   
                    });
                }


                if (sourceblockchainbridge !== "Ethereum" && destinationblockchainname === "Ethereum"){ 
                    const createoneth_tx = await (await createnftscontractethereum.createNFT(tokenuri)).wait();
                    if (createoneth_tx.hash || createoneth_tx.transactionHash){
                        toast({
                            title: "Success",
                            description: "Your NFT is Successfully transferred to Ethereum Blockchain",
                            status: 'success',
                            duration: 2500,
                            isClosable: true,
                            position: 'top-left',   
                        });
            
                    }

                }

                if (sourceblockchainbridge === "Avalanche" && destinationblockchainname === "Avalanche"){
                    toast({
                        title: 'Error on transferring NFT',
                        description: "You could not transfer nfts across same blockchain",
                        status: 'error',
                        duration: 2000,
                        isClosable: true,
                        position: 'top-left',   
                    });
                }

                if (sourceblockchainbridge !== "Avalanche" && destinationblockchainname === "Avalanche"){ 
                    const createonavax_tx = await (await createnftscontractavalanche.createNFT(tokenuri)).wait();
                    if (createonavax_tx.hash || createonavax_tx.transactionHash){
                        toast({
                            title: "Success",
                            description: "Your NFT is Successfully transferred to Avalanche Blockchain",
                            status: 'success',
                            duration: 2500,
                            isClosable: true,
                            position: 'top-left',   
                        });
            
                    }

                }


                if (sourceblockchainbridge === "BinanceSmartChain" && destinationblockchainname === "BinanceSmartChain"){
                    toast({
                        title: 'Error on transferring NFT',
                        description: "You could not transfer nfts across same blockchain",
                        status: 'error',
                        duration: 2000,
                        isClosable: true,
                        position: 'top-left',   
                    });
                }

                if (sourceblockchainbridge !== "BinanceSmartChain" && destinationblockchainname === "BinanceSmartChain"){ 
                    console.log(createnftscontractbinance)
                    const createonbinacne_tx = await (await createnftscontractbinance.createNFT(tokenuri)).wait();
                    if (createonbinacne_tx.hash || createonbinacne_tx.transactionHash){
                        toast({
                            title: "Success",
                            description: "Your NFT is Successfully transferred to Binance Smart Chain Blockchain",
                            status: 'success',
                            duration: 2500,
                            isClosable: true,
                            position: 'top-left',   
                        });
            
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
            <br></br>  
            <Flex justify="center" fontWeight='extrabold' fontSize="45px" bgClip='text'  bgGradient='linear(to-r, cyan.800, pink.700)'>
                    Transfer NFTs Using The Multi-Talenta Bridge
            </Flex>
            <br></br>
            <Container  border='1px' borderColor='black' height="745px" borderWidth={1} borderRadius= "30px">
                <FormControl justify="center" >
                    <br></br>
                    <FormLabel tmlfor= "choosesourceblockchain" fontSize="25px">Source Blockchain</FormLabel>
                    <Select id="choosesourceblockchain"  height="60px" width="485px" borderWidth={3} fontSize={20} onChange={myFunction1}>

                                    <option value="" disabled selected hidden>Choose Blockchain</option>
                                    <option value='Ethereum'>
                                        Goerli Ethereum Testnet
                                    </option>
                                    <option value='Polygon'>Mumbai Polygon Testnet</option>
                                    <option value='Avalanche'>Avalanche Testnet</option>
                                    <option value='BinanceSmartChain'>Binance Smart Chain Testnet</option>
                                  
                    </Select>
                    <br></br>
                    <FormLabel htmlfor= "createdorpurchased" fontSize="25px">Transfer From</FormLabel>
                    <Select id="createdorpurchased"  height="60px" width="485px" borderWidth={3} fontSize={20}>

                                    <option value="" disabled selected hidden>Created or Purchased ?</option>
                                    <option value='created'>
                                        Created NFTs
                                    </option>
                                    <option value='purchased'>Purchased NFTs</option>
                                   
                                  
                    </Select>
                    <br></br>
                    <FormLabel htmlfor= "tokenid" fontSize="25px" >Token Id</FormLabel>
                    <Input id = "tokenid" type='text' placeholder="NFT token id" variant='outline' borderWidth={3}  fontSize={22}   height="60px"  isRequired />
                    <br></br><br></br>
                    
                    <Flex justify="center">
                        <Button 
                            backgroundColor="gray"
                            fontWeight='extrabold'
                            colorScheme='green' 
                            variant='solid'
                            borderRadius= "20px"
                            width="310px"
                            height="75px"
                            fontSize={28}
                            type='submit'
                            onClick={depositinvault}                            
                            >Deposit in NFT Vault
                        </Button>
                    </Flex>
                    <br></br>
                    <FormLabel htmlfor= "choosedestinationblockchain" fontSize="25px">Destitnation Blockchain</FormLabel>
                    <Select id="choosedestinationblockchain"  height="60px" width="485px" borderWidth={3} fontSize={20} onChange={myFunction2} >

                        <option value="" disabled selected hidden>Choose Blockchain</option>
                        <option value='Ethereum'>
                            Goerli Ethereum Testnet
                        </option>
                        <option value='Polygon'>Mumbai Polygon Testnet</option>
                        <option value='Avalanche'>Avalanche Testnet</option>
                        <option value='BinanceSmartChain'>Binance Smart Chain Testnet</option>

                    </Select>
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
                            type='submit'
                            onClick={transfernfts}
                            
                            >Transfer NFT
                        </Button>
                    </Flex>


                </FormControl>
            </Container>
            </Box>
        </VStack>

  


   ) 
    
};
export default NFTBRIDGE;