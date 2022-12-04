
const hre = require("hardhat");

async function main() {

const walletaddressdead= "0x94B8ABcD45650a093DED8Da796e5628669Dd9120";


  const BINANCENFTCREATION = await hre.ethers.getContractFactory("NFTCreationBinance");
  const binancenftcreation = await BINANCENFTCREATION.deploy("0x6722d3c01b6c51C86797Bd183080b3adBAFB1935",walletaddressdead);

  await binancenftcreation.deployed();
  



  console.log(
    `Binance NFT Creation contract deployed with address: ${binancenftcreation.address}`
   ); 
 

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
