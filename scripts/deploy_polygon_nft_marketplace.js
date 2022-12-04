
const hre = require("hardhat");

async function main() {

  const walletaddressdead= "0x94B8ABcD45650a093DED8Da796e5628669Dd9120";

  const POLYGONMARKETPLACE = await hre.ethers.getContractFactory("PolygonNFTMarketplace");
  const polygonmarketplace = await POLYGONMARKETPLACE.deploy(1,walletaddressdead);

  await polygonmarketplace.deployed();

 



  console.log(
   `Polygon NFT Marketplace contract deployed with address: ${polygonmarketplace.address}`
   ); 

 

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
