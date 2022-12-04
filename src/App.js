import './App.css';
import {  useState } from 'react';
import { BrowserRouter ,Routes, Route,Link } from "react-router-dom";
import {ethers} from 'ethers';
import { useToast } from '@chakra-ui/react'
import Navbar from './pages/navbar.js';
import Home from './pages/home.js';
import Create from './pages/createnft';
import MYCREATEDNFTS from './pages/mynftscreated.js';
import MYPURCHASEDNFTS from './pages/mypurchsednfts';

import createnft_abi_object_polygon from './contracts_abi_data//nftscreationfolder/createnftcontract_polygon.json';
import createnft_abi_object_ethereum from './contracts_abi_data//nftscreationfolder/createnftcontract_ethereum.json';
import createnft_abi_object_binance from './contracts_abi_data//nftscreationfolder/createnftcontract_binance.json';
import createnft_abi_object_avalanche from './contracts_abi_data//nftscreationfolder/createnftcontract_avalanche.json';
import nftmarketplace_polygon from './contracts_abi_data/nftsmarketplacesfolder/nftmarketplace_polygon.json'
import nftmarketplace_ethereum from './contracts_abi_data/nftsmarketplacesfolder/nftmarketplace_ethereum.json'
import nftmarketplace_avalanchee from './contracts_abi_data/nftsmarketplacesfolder/nftmarketplace_avalanche.json'
import nftmarketplace_binance from './contracts_abi_data/nftsmarketplacesfolder/nftmarketplace_binance.json'

import NFTSMARKET from './pages/alllistednfts';
import Ethereum_Marketplace from './pages/Marketplaces_Blockchain_pages/ethereum_marketplace';
import Polygon_Marketplace from './pages/Marketplaces_Blockchain_pages/polygon_marketplace';
import Avalanche_Marketplace from './pages/Marketplaces_Blockchain_pages/avalanche_marketplace';
import Binance_Marketplace from './pages/Marketplaces_Blockchain_pages/binance_marketplace';
import NFTBRIDGE from './pages/nftbridge';



function App() {
  const [accounts , setaccounts] = useState([]);
  const [chainid , setchainid] = useState();

  //contracts
  const [createnftscontractpolygon, setcreatenftcontractpolygon] = useState({});
  const [createnftscontractethereum, setcreatenftcontractethereum] = useState({});
  const [createnftscontractbinance, setcreatenftcontractbinance] = useState({});
  const [createnftscontractavalanche, setcreatenftcontractavalanche] = useState({});
  const [nftmarketplacepolygoncontract, setnftmarketplacepolygoncontract] = useState({});
  const [nftmarketplaceethereumcontract, setnftmarketplaceethereumcontract] = useState({});
  const [nftmarketplaceavalanchecontract, setnftmarketplaceavalanchecontract] = useState({});
  const [nftmarketplacebinancecontract, setnftmarketplacebinancecontract] = useState({});

  // create nft contracts address
  const createnftcontract_addresspolygon= "0x4204141A2568b16326f9176B5996DeB1c36fd8f2";
  const createnftcontract_addressethereum= "0xFEc4bE7187B9Be97E0d23A43533cA8c0c12D76bE";
  const createnftcontract_addressbinance= "0x9158d27068b1eDCB498410228797Fb4965eA2331";
  const createnftcontract_addressavalanche= "0x50dB6242DF8674e9F1B541D2dBf2c1BF8129a03c";


  // nft marketplaces contracts address
  const polygonnftmarketplace= "0xA0E43a90ce9DFbF2fA118A1e91328A633614b3f5";
  const ethereumnftmarketplace= "0x478c6F0Eb8874783AACB400fb096B40960Bb40fF";
  const avalanchenftmarketplace= "0x08f890e4bc5A6FDDFe49C7b3318072635c7dd50b";
  const binancenftmarketplace= "0x6722d3c01b6c51C86797Bd183080b3adBAFB1935";

 




  const toast = useToast();

  const connectwallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request ({
          method: "eth_requestAccounts",
      });
      setaccounts(accounts); 
      const provider = await new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner();

      const currentchainid = await window.ethereum.request({
        method:"eth_chainId",
      }
      )
      setchainid(currentchainid)

   
      window.ethereum.on('accountsChanged', async function (accounts) {          
          await connectwallet()
        })
      window.ethereum.on('networkChanged', async function(networkId){
        await connectwallet()
      
        
      
    });

    connecttocreatenftpolygon(signer);
    connecttocreatenftethereum(signer);
    connecttocreatenftbinance(signer);
    connecttocreatenftavalanche(signer);

    connecttopolygonnftmarketplace(signer);
    connecttoethereumnftmarketplace(signer);
    connecttoavalanchenftmarketplace(signer);
    connecttobinancenftmarketplace(signer);

    


    }
    else {
      toast({
        title: 'Error! MetaMask Not Found',
        description: "You have not installed MetaMask",
        status: 'error',
        duration: 2200,
        isClosable: true,
        position: 'top',   
      });
    }

  }

    // NFTs creation
    const connecttocreatenftpolygon = async (signer) => {
      const createnftcontractpolygon = new ethers.Contract(createnftcontract_addresspolygon,createnft_abi_object_polygon.createnft_abi_polygon,signer);
      setcreatenftcontractpolygon(createnftcontractpolygon);
    }
    const connecttocreatenftethereum = async (signer) => {
      const createnftcontractethereum = new ethers.Contract(createnftcontract_addressethereum,createnft_abi_object_ethereum.createnft_abi_ethereum,signer);
      setcreatenftcontractethereum(createnftcontractethereum);
    }
    const connecttocreatenftbinance = async (signer) => {
      const createnftcontractbinance = new ethers.Contract(createnftcontract_addressbinance,createnft_abi_object_binance.createnft_abi_binance,signer);
      setcreatenftcontractbinance(createnftcontractbinance);
    }
    const connecttocreatenftavalanche = async (signer) => {
      const createnftcontractavalanche = new ethers.Contract(createnftcontract_addressavalanche,createnft_abi_object_avalanche.createnft_abi_avalanche,signer);
      setcreatenftcontractavalanche(createnftcontractavalanche);
    }


    // marketplaces
    const connecttopolygonnftmarketplace = async (signer) => {
      const nftmarketplacepolygon = new ethers.Contract(polygonnftmarketplace,nftmarketplace_polygon.nftmarketplace_polygon,signer);
      setnftmarketplacepolygoncontract(nftmarketplacepolygon);
    }
    const connecttoethereumnftmarketplace = async (signer) => {
      const nftmarketplaceethereum = new ethers.Contract(ethereumnftmarketplace,nftmarketplace_ethereum.nftmarketplace_ethereum,signer);
      setnftmarketplaceethereumcontract(nftmarketplaceethereum);
    }
    const connecttoavalanchenftmarketplace = async (signer) => {
      const nftmarketplace_avalanche = new ethers.Contract(avalanchenftmarketplace,nftmarketplace_avalanchee.nftmarketplace_avalanche,signer);
      setnftmarketplaceavalanchecontract(nftmarketplace_avalanche);
    }
    const connecttobinancenftmarketplace = async (signer) => {
      const nftmarketplacebinance = new ethers.Contract(binancenftmarketplace,nftmarketplace_binance.nftmarketplace_binance,signer);
      setnftmarketplacebinancecontract(nftmarketplacebinance);
    }


  return (
    <div>
      
      <BrowserRouter>        
        <div className="App">
          <Navbar accounts={accounts} chainid = {chainid} connectwallet={connectwallet} />
        </div>  
        <Routes>
          <Route path= "/" element={ <Home />}/>
          <Route path= "/create" element={ <Create accounts={accounts} chainid={chainid} connectwallet={connectwallet}createnftscontractpolygon={createnftscontractpolygon} 
          createnftscontractethereum={createnftscontractethereum} createnftscontractavalanche={createnftscontractavalanche}  createnftscontractbinance={createnftscontractbinance}/>}/>
          <Route path= "/mycreatednfts" element={ <MYCREATEDNFTS accounts={accounts} chainid={chainid}   createnftscontractpolygon={createnftscontractpolygon}
          createnftscontractethereum={createnftscontractethereum} createnftscontractavalanche={createnftscontractavalanche}  createnftscontractbinance={createnftscontractbinance}
          nftmarketplacepolygoncontract={nftmarketplacepolygoncontract} nftmarketplaceethereumcontract={nftmarketplaceethereumcontract}
          nftmarketplaceavalanchecontract={nftmarketplaceavalanchecontract} nftmarketplacebinancecontract={nftmarketplacebinancecontract}/>}/>

          <Route path= "/mypurchasednfts" element={ <MYPURCHASEDNFTS accounts={accounts} chainid={chainid}  createnftscontractpolygon={createnftscontractpolygon}
          createnftscontractethereum={createnftscontractethereum} createnftscontractavalanche={createnftscontractavalanche}  createnftscontractbinance={createnftscontractbinance}
          nftmarketplacepolygoncontract={nftmarketplacepolygoncontract} nftmarketplaceethereumcontract={nftmarketplaceethereumcontract}
          nftmarketplaceavalanchecontract={nftmarketplaceavalanchecontract} nftmarketplacebinancecontract={nftmarketplacebinancecontract}/>}/>
          
          <Route path= "/nftmarketplaces" element={ <NFTSMARKET />}/>
          <Route path="/nftmarketplaces/ethereum_marketplace" element={<Ethereum_Marketplace accounts={accounts} chainid={chainid} createnftscontractethereum={createnftscontractethereum} nftmarketplaceethereumcontract={nftmarketplaceethereumcontract} />} />
          <Route path="/nftmarketplaces/polygon_marketplace" element={<Polygon_Marketplace accounts={accounts} chainid={chainid} createnftscontractpolygon={createnftscontractpolygon} nftmarketplacepolygoncontract={nftmarketplacepolygoncontract} />} />
          <Route path="/nftmarketplaces/avalanche_marketplace" element={<Avalanche_Marketplace accounts={accounts} chainid={chainid} createnftscontractavalanche={createnftscontractavalanche} nftmarketplaceavalanchecontract={nftmarketplaceavalanchecontract}  />} />
          <Route path="/nftmarketplaces/binance_marketplace" element={<Binance_Marketplace accounts={accounts} chainid={chainid} createnftscontractbinance={createnftscontractbinance} nftmarketplacebinancecontract={nftmarketplacebinancecontract} />} />
          <Route path= "nftbridge" element={ <NFTBRIDGE accounts={accounts} chainid={chainid}  createnftscontractpolygon={createnftscontractpolygon}
          createnftscontractethereum={createnftscontractethereum} createnftscontractavalanche={createnftscontractavalanche}  createnftscontractbinance={createnftscontractbinance}
          nftmarketplacepolygoncontract={nftmarketplacepolygoncontract} nftmarketplaceethereumcontract={nftmarketplaceethereumcontract}
          nftmarketplaceavalanchecontract={nftmarketplaceavalanchecontract} nftmarketplacebinancecontract={nftmarketplacebinancecontract} />}/>


        </Routes>
      </BrowserRouter>
      


    </div>
  );
}

export default App;
