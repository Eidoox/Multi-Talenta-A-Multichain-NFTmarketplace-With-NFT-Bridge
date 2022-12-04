
const hre = require("hardhat");

async function main() {

const walletaddressdead= "0x94B8ABcD45650a093DED8Da796e5628669Dd9120";

  const ETHEREUMMARKETPLACE = await hre.ethers.getContractFactory("EthereumNFTMarketplace");
  const ethereummarketplace = await ETHEREUMMARKETPLACE.deploy(1,walletaddressdead);

  await ethereummarketplace.deployed();

 



  console.log(
   `Ethereum NFT Marketplace contract deployed with address: ${ethereummarketplace.address}`
   ); 

 

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
