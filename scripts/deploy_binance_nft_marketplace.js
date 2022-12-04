
const hre = require("hardhat");

async function main() {

const walletaddressdead= "0x94B8ABcD45650a093DED8Da796e5628669Dd9120";

  const BINANCEMARKETPLACE = await hre.ethers.getContractFactory("BinanceNFTMarketplace");
  const binancemarketplace = await BINANCEMARKETPLACE.deploy(1,walletaddressdead);

  await binancemarketplace.deployed();





  console.log(
   `Binance NFT Marketplace contract deployed with address: ${binancemarketplace.address}`
   ); 

 

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
