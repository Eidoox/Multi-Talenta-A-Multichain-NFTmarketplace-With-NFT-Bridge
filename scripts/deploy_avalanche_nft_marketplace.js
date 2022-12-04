
const hre = require("hardhat");

async function main() {

const walletaddressdead= "0x94B8ABcD45650a093DED8Da796e5628669Dd9120";

  const AVALANCHEMARKETPLACE = await hre.ethers.getContractFactory("AvalancheNFTMarketplace");
  const avalanchemarketplace = await AVALANCHEMARKETPLACE.deploy(1,walletaddressdead);

  await avalanchemarketplace.deployed();





  console.log(
   `Avalanche NFT Marketplace contract deployed with address: ${avalanchemarketplace.address}`
   ); 
  
 

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
