// SPDX-License-Identifier: MTI
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";


contract EthereumNFTMarketplace is ReentrancyGuard {
    address private nftvaultaddress;
    AggregatorV3Interface internal priceFeed;
    uint256  marketitemscount;
    uint256  solditems;
    address payable  withdrawfeesaccount; //owner to withdraw fees
    uint256  marketfeespercentage;
    mapping (address => uint256 []) mypurchasednft;

    struct nftmarketitem{
        uint256 itemid;
        address nftcontractaddress;
        uint256 tokenid;
        address payable seller;
        address payable holder;
        uint256 price;
        uint256 issold; // 1 or 0
        uint256 islisted; // 1 or 0 
        uint256 istransferred; // 1 or 0 
    }
    mapping (uint256 => nftmarketitem) NFTMarketItems;


    constructor (uint256 _feespercentage, address _nftvaultaddress) {
        marketfeespercentage = _feespercentage;
        withdrawfeesaccount = payable(msg.sender);
        priceFeed = AggregatorV3Interface(0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e);
        nftvaultaddress = _nftvaultaddress;

    }
     function getLatestPriceOfMaticVsUSD() public view returns (int) {
        (
            ,
            /*uint80 roundID*/ int price /*uint startedAt*/ /*uint timeStamp*/ /*uint80 answeredInRound*/,
            ,
            ,

        ) = priceFeed.latestRoundData();
        return price;
    }

    // list function (sell nft) 
    function listnft (address nftcontractaddress, uint256 tokenid, uint256 price) external nonReentrant {
        require(price > 0 , "price should greater than 0");
        marketitemscount ++;
      
        nftmarketitem memory newnftmarketitem = nftmarketitem (marketitemscount,nftcontractaddress,tokenid,payable(msg.sender),payable(address(0)),price,0,1,0);
        NFTMarketItems[marketitemscount] = newnftmarketitem;
        for (uint256 i = 0; i < marketitemscount; i++) {
            if (NFTMarketItems[i].tokenid == tokenid) {
                
                NFTMarketItems[i].islisted = 1;

            }
        }
        IERC721(nftcontractaddress).transferFrom(msg.sender, address(this), tokenid);
    
    } 

       //Function to apply market fees (1%)
    function totalpricewith_marketfees (uint256 marketitemid) public view returns (uint256) {
        uint256 totalprice= NFTMarketItems[marketitemid].price ;
        uint256 totalpricewithfees = totalprice* (100+marketfeespercentage);
        return totalpricewithfees/100;
    }
    // Buy NFT function

    function buynft (uint256 marketitemid) external payable nonReentrant {
        require (marketitemid >0 && marketitemid<= marketitemscount , "invalid market item id");
        uint256 priceofnft = NFTMarketItems[marketitemid].price;
        address nftcontractaddress = NFTMarketItems[marketitemid].nftcontractaddress;
         uint256 nfttokenid = NFTMarketItems[marketitemid].tokenid;

        uint256 nfttotalprice = totalpricewith_marketfees(marketitemid);


        require (msg.value == nfttotalprice , "Pay what seller requires");
        NFTMarketItems[marketitemid].seller.transfer(priceofnft);
        IERC721(nftcontractaddress).transferFrom( address(this) ,msg.sender, nfttokenid);
        withdrawfeesaccount.transfer(nfttotalprice - priceofnft);

         NFTMarketItems[marketitemid].holder = payable(msg.sender);
         NFTMarketItems[marketitemid].issold = 1;
         NFTMarketItems[marketitemid].islisted = 0;
         solditems++;

    }

    function getmypurchasednfts () public view returns (nftmarketitem [] memory){
        uint totalitemscount = marketitemscount;
        uint myitemcount = 0;
        uint currentindex = 0;
        for (uint i = 0; i < totalitemscount; i++) {
            if (NFTMarketItems[i + 1].holder  == msg.sender) {
                myitemcount += 1;
            }
        }

        nftmarketitem[] memory mynftitems = new nftmarketitem[](myitemcount);
        for (uint256 i = 0 ; i<marketitemscount;i++){
            if(NFTMarketItems[i+1].holder == msg.sender){
                uint256 currentId  = i+1;
                nftmarketitem storage currentItem = NFTMarketItems[currentId];
                mynftitems[currentindex] = currentItem;
                currentindex += 1;

            }
        }
        return mynftitems;
    }


    function getnotsoldnfts() public view returns (nftmarketitem[] memory) {
        uint itemCount = marketitemscount;
        uint unsolditemscount = marketitemscount- solditems;
        uint currentIndex = 0;

        nftmarketitem[] memory notsolditems = new nftmarketitem[](unsolditemscount);
        for (uint256 i = 0; i < itemCount; i++) {
            if (NFTMarketItems[i + 1].holder == address(0)) {
                uint currentId = i + 1;
                nftmarketitem storage currentItem = NFTMarketItems[currentId];
                notsolditems[currentIndex] = currentItem;
                currentIndex += 1;
      }
    }
    return notsolditems;
  }

    
      // For NFT Bridge 

  function transfernfts (uint256 _tokenid) public {
    uint itemCount = marketitemscount;
    for (uint256 i = 0; i < itemCount; i++) {
        if (NFTMarketItems[i].holder == msg.sender) {
            IERC721(NFTMarketItems[i].nftcontractaddress).transferFrom( msg.sender,nftvaultaddress, _tokenid);
            NFTMarketItems[i].istransferred = 1;

        }
    }
  }

}
