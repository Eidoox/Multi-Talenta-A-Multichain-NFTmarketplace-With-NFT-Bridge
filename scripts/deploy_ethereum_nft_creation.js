
const hre = require("hardhat");

async function main() {

const walletaddressdead= "0x94B8ABcD45650a093DED8Da796e5628669Dd9120";

  const ETHEREUMNFTCREATION = await hre.ethers.getContractFactory("NFTCreationEthereum");
  const ethereumnftcreation = await ETHEREUMNFTCREATION.deploy("0x478c6F0Eb8874783AACB400fb096B40960Bb40fF",walletaddressdead);

  await ethereumnftcreation.deployed();



 
  console.log(
    `Ethereum NFT Creation contract deployed with address: ${ethereumnftcreation.address}`
   ); 
 

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
