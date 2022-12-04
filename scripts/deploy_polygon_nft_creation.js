
const hre = require("hardhat");

async function main() {

  const walletaddressdead= "0x94B8ABcD45650a093DED8Da796e5628669Dd9120";

 
  const POLYGONNFTCREATION = await hre.ethers.getContractFactory("NFTCreationPolygon");
  const polygonnftcreation = await POLYGONNFTCREATION.deploy("0xA0E43a90ce9DFbF2fA118A1e91328A633614b3f5",walletaddressdead);

  await polygonnftcreation.deployed();


  console.log(
    `Polygon NFT Creation contract deployed with address: ${polygonnftcreation.address}`
   ); 
 

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
