import {Box , Button , Flex , HStack,VStack} from '@chakra-ui/react';
import {Menu,MenuButton, MenuList,MenuItem} from '@chakra-ui/react'

import { Link } from "react-router-dom";

const Navbar = ({accounts,chainid,connectwallet}) => {
    const iswalletconnected = Boolean(accounts[0]);
  

    return (

        <Flex justify= "space-between" padding="4px" bg="white" borderWidth={2}  >
                <HStack spacing="100" justify="space-between" position= "sticky" >
                    <Flex as={Link} to= "/" fontWeight='extrabold' fontSize="18px" bgClip='text'  bgGradient='linear(to-r, cyan.800, pink.900)' fontFamily="fantasy" mr={500}>
                        MultiChain NFT Marketplace
                    </Flex>
                    
                    <HStack spacing="127" justify="space-between"  position= "sticky"  >
                        <Button as={Link} varient="link" backgroundColor= "white" to="/" fontSize="20px" fontWeight="bold"> Home</Button>
                        <Button as={Link} varient="link" backgroundColor= "white" to="/create" fontSize="20px" fontWeight="bold" > Create</Button>
                        <Menu>
                            <MenuButton as={Button} 
                                backgroundColor="white" 
                                fontWeight='bold'
                                fontSize="20px" 
                                
                             
                                >
                                Explore
                            </MenuButton>
                            <MenuList>
                                <MenuItem as={Link}
                                    varient="link"
                                    backgroundColor= "white" 
                                    to="/mycreatednfts" 
                                    fontSize="20px" 
                                    fontWeight="bold"
                                >My Created NFTs
                                </MenuItem>

                                <MenuItem as={Link}
                                    varient="link"
                                    backgroundColor= "white" 
                                    to="/mypurchasednfts" 
                                    fontSize="20px" 
                                    fontWeight="bold"
                                >My Purchased NFTs
                                </MenuItem>

                                <MenuItem as={Link}
                                    varient="link"
                                    backgroundColor= "white" 
                                    to="/nftmarketplaces" 
                                    fontSize="20px" 
                                    fontWeight="bold"
                                  
                                >NFTs Marketplaces
                                </MenuItem>

                            </MenuList>
                        </Menu>
                        <Button as={Link} varient="link" backgroundColor= "white" to="/nftbridge" fontSize="20px" fontWeight="bold">  NFTs Bridge</Button>
                    </HStack>
                    
                    {iswalletconnected ? (
                        <HStack>
                            <Box as='button' backgroundColor="lightblue" borderRadius= "100px" width="170px" height="60px" fontStyle="extrabold" fontSize={20} > {accounts[0].slice(0, 5) + '...' + accounts[0].slice(38, 42)}</Box>
                        </HStack>
                    ): (
                        <Button 
                        backgroundColor="gray"
                        colorScheme='green' 
                        variant='solid'
                        borderRadius= "100px"
                        width="170px" 
                        height="60px"
                        fontSize={20}
                        
                        onClick={connectwallet}>Connect Wallet</Button>
                    )}

                </HStack>

        </Flex>
        

    );
};

export default Navbar;