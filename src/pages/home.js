import {Box , Image , Flex , StackDivider , Link, HStack,VStack,Text,SimpleGrid} from '@chakra-ui/react';


const Home = () => {

    function Feature({ desc, ...rest }) {
        return (
          <Box p={4} shadow='lg' borderWidth='3px' {...rest} boxSize={280}  >
            <Text mt={5} fontSize="23px" fontWeight='bold' fontFamily=" Nirmala UI"  >{desc}</Text>
          </Box>
        )
      }
    
        

    return (
        <VStack
          divider={<StackDivider borderColor='white' />}
          spacing={2}
          align='stretch'
          >   
            <Box bgGradient='linear(to-r, azure,white,azure,white)' height="2200px">
                    <VStack
                    divider={<StackDivider borderColor='white' />}
                    spacing={2}
                    align='stretch'
                    >  
                    <Box>
                        <Flex justify="center" fontFamily=" Nirmala UI" fontWeight='extrabold' fontSize="66px" bgClip='text'  bgGradient='linear(to-r, cyan.900, pink.900)' padding={10}>
                            Create, trade, and transfer NFTs
                        </Flex>
                    </Box>


                    <Box h='470px'>
                   
                   

                   <HStack spacing="10px" >
                       <Box w='800px' h='200px'ml={35} >
                        
                               <Flex fontWeight='bold' fontSize="40px" ml={10} bgClip='text'  bgGradient='linear(to-r, cyan.800, red.900)'>
                                   Welcome to Multi-Talenta !
                               </Flex>
                               <Box fontSize="30px"  bgClip='text'  bgGradient='linear(to-r, black, blue.800)'>
                                   Multi-Talenta is a multichain NFT marketplace with NFT Bridge that makes it simple to create, trade, and transfer NFTs across 4 different blockchains. 
                               </Box>
                       </Box>
                       <Box w='400px' h='350px'>
                           <Flex>
                               <Image src="https://www.oincrivel.com.br/wp-content/uploads/2022/03/4-nft-gorila-kong-macaco-round6-alphakongsclub.jpg"  height={350} width={350} ml={188}   />
                           </Flex>
                       </Box>
                       <Box w='400px' h='350px'>
                           <Flex>
                               <Image src="https://i.pinimg.com/750x/a6/96/f5/a696f5491898d38f45ec149fa0ef4a01.jpg" height={350}  width={230}  ml={170}   />
                           </Flex>
                       </Box>
                       <Box w='400px' h='350px'>
                           <Flex>
                               <Image src="https://pbs.twimg.com/media/FSF87tdXMAEeDa1?format=jpg&name=medium"  height={350} width={350}  />
                           </Flex>
                       </Box>
                      
                   </HStack>  
               </Box>
    
            
               <Box h='350px' justify="center">
                   
                       <Box w='800px' h='200px' ml={600}  >                       
                               <Flex  justify="center" fontWeight='extrabold' fontFamily=" Nirmala UI" fontSize="45px"bgClip='text'  bgGradient='linear(to-r, cyan.800, red.900)'>
                                   Create - Trade - Transfer NFTs
                               </Flex>
                               <Flex justify="center" fontWeight='extrabold'  fontFamily=" Nirmala UI" fontSize="38px"  bgClip='text'  bgGradient='linear(to-r, cyan.800, red.900)'>
                                   Across 4 different blockchains
                               </Flex>
                       </Box>
                       <HStack spacing="65px" justify="center">
                       <Box w='230px' h='230px' >
                           <Flex>
                               <Image src="https://cryptologos.cc/logos/polygon-matic-logo.png?v=023"  height={160} width={160}   />
                           </Flex>
                       </Box>
                       <Box w='230px' h='230px'>
                           <Flex>
                               <Image src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=023" height={160}  width={160}     />
                           </Flex>
                       </Box>
                       <Box w='230px' h='230px'>
                           <Flex>
                               <Image src="https://cryptologos.cc/logos/avalanche-avax-logo.png?v=023"  height={160} width={160}    />
                           </Flex>
                       </Box>
                       <Box w='230px' h='230px'>
                           <Flex>
                               <Image src="https://cryptologos.cc/logos/bnb-bnb-logo.png?v=023"  height={160} width={160}  />
                           </Flex>
                       </Box>
                       
                   </HStack>  
               </Box>


<br></br>
                <Box h="500px" justify="center">
                        <Flex justify="center" fontFamily=" Nirmala UI" fontWeight='extrabold' fontSize="45px"  bgClip='text'  bgGradient='linear(to-r, cyan.800, red.900)' padding={10}>
                            Marketplace Features
                        </Flex>
                        <Flex justify="center" >

                        <SimpleGrid columns={4} spacingX='40px' spacingY='20px ' >

                        <Feature
                            
                            desc='Multi-Talenta would allow seamless connectivity between NFTs developed on different chains.'
                        />
                           <Feature
                            
                            desc=' Real-world market prices of NFTs. Hence, Assets prices will be in blockchain coin and dollars.'
                        />
                           <Feature
                            
                            desc='All NFTs assets metadata stored on decentralized storage like IPFS which is NFT.Storage'
                        />
                           <Feature
                            
                            desc='NFT Bridging connects two different networks and transfers NFTs between them. '
                        />
                        
                       
                    
                      
                      
                         
                        </SimpleGrid>
                        </Flex>

                </Box>



               <Box h="500px" justify="center">
                        <Flex justify="center" fontFamily=" Nirmala UI" fontWeight='extrabold' fontSize="45px"  bgClip='text'  bgGradient='linear(to-r, cyan.800, red.900)' padding={10}>
                            POWERED BY
                        </Flex>
                        <HStack spacing="30px" >
                    
                       <Box w='370px' h='350px'>
                           <Flex>
                               <Image src="https://polygon.technology/_nuxt/img/polygon-logo.99647ca.svg"  height={350} width={350} ml={150}   />
                           </Flex>
                       </Box>
                       <Box w='370px' h='350px'>
                           <Flex>
                               <Image src="https://assets-global.website-files.com/5f6b7190899f41fb70882d08/5f760a499b56c47b8fa74fbb_chainlink-logo.svg" height={350}  width={230}  ml={170}   />
                           </Flex>
                       </Box>
                       <Box w='300px' h='350px'>
                           <Flex>
                               <Image src="https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png"  height={220} width={220}  ml={50} mt={14}/>
                           </Flex>
                       </Box>
                       <Box w='370px' h='350px'>
                           <Flex>
                               <Image src="https://filecoin.io/uploads/nft-storage-logo.svg"  height={350} width={350}  />
                           </Flex>
                       </Box>
                       <Box w='290px' h='290px'>
                           <Flex>
                               <Image src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/6088f4c7c34ad61ab10cdf72_horizontal-logo-onecolor-neutral-alchemy.svg"  height={250} width={250} mt={5}  />
                           </Flex>
                       </Box>
       
                      
                   </HStack>  

                </Box>
                
               <Box fontSize="18px" fontWeight="bold" >
                    <Flex justify="center"  >
                        Made with {"\u2665" } By: Eidoox
                    </Flex>
                        <HStack spacing='24px' justify="center" color="blue.500" >
                            <Link href="https://www.linkedin.com/in/eidoox/" external>Linkedin</Link> 
                            <Link href="https://github.com/Eidoox">GitHub</Link>
                            <Link href="https://eidoox.hashnode.dev/"> Blogs</Link>
                        </HStack>
                </Box>


               </VStack>          
            </Box>
        
        </VStack>

    
    );
}


export default Home;
