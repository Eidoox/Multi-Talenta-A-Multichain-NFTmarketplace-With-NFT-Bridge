// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFTCreationBinance is ERC721URIStorage {
    address private nftmarketplace_contractaddress;
    address private nftvaultaddress;
    mapping (address => uint256 []) private OwnedNFTS;

    struct creatednfts {
        address creator;
        string nfttokenuri;
        uint256 tokenid;
        uint256 islisted; // 1 : true          0 : false I made this to be readable in the frontend (React)
        
    }

    creatednfts [] private CreatedNFTs;
    uint256  currentNFTid;
 
    constructor (address marketplace_contractaddress , address _nftvaultaddress) ERC721 ("Multi-Chain Eidoox NFT Marketplace","MCENFT"){
        nftmarketplace_contractaddress = marketplace_contractaddress;
        nftvaultaddress = _nftvaultaddress;
    }

    function createNFT (string memory tokenuri) public returns (uint256){
        currentNFTid ++;
        _safeMint(msg.sender, currentNFTid);
        _setTokenURI(currentNFTid, tokenuri);
        setApprovalForAll(nftmarketplace_contractaddress , true);
        creatednfts memory newcreatednft = creatednfts(msg.sender,tokenuri,currentNFTid,0);
        CreatedNFTs.push(newcreatednft);
        OwnedNFTS [msg.sender].push(currentNFTid);
        return currentNFTid;
    }

    function getmynfts () public view returns (uint256 [] memory){
        
        return OwnedNFTS[msg.sender];

    }
    function getcurrentnftid () public view returns (uint256){
        
        return currentNFTid;
    }

    function getmycreatednftsdata () public view returns (creatednfts [] memory){
        return CreatedNFTs;
    }
    function getmycreatednftsdatalength () public view returns (uint256){
        return CreatedNFTs.length;
    }
    function changelistingstatus (uint256 _tokenid) public {
        uint256 CreatedNFTslength = getmycreatednftsdatalength();
        for (uint i = 0; i < CreatedNFTslength; i++) {
            if (CreatedNFTs[i].tokenid  == _tokenid) {
                CreatedNFTs[i].islisted = 1;
            }
        }
    }

      // Functions for NFT Bridge

    function transfernfts (uint256 _tokenid) public returns (string memory) {
        require (ownerOf(_tokenid) == msg.sender, "you do not own that nft");
        require(_tokenid <= currentNFTid , "not found tokenid");
        uint256 CreatedNFTslength = getmycreatednftsdatalength();
          for (uint i = 0; i < CreatedNFTslength; i++) {
            if (CreatedNFTs[i].tokenid  == _tokenid) {
                transferFrom(msg.sender, nftvaultaddress, _tokenid);
                CreatedNFTs[i].creator = nftvaultaddress;
            }
        }
        return tokenURI(_tokenid);

    }

}
