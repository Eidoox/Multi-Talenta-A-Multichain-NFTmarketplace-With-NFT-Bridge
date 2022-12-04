
const hre = require("hardhat");

async function main() {

const walletaddressdead= "0x94B8ABcD45650a093DED8Da796e5628669Dd9120";



  const AVALANCHENFTCREATION = await hre.ethers.getContractFactory("NFTCreationAvalanche");
  const avalanchenftcreation = await AVALANCHENFTCREATION.deploy("0x08f890e4bc5A6FDDFe49C7b3318072635c7dd50b",walletaddressdead);

  await avalanchenftcreation.deployed();



  
  console.log(
    `Avalanche NFT Creation contract deployed with address: ${avalanchenftcreation.address}`
   ); 
 

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
