import React, { useEffect, useState } from 'react';

const FetchMarketAuctions = ({
  auctionContract
}) => {

  const [allAuctions, setAllAuctions] = useState(null)

  const ids = [
    "0x0000000000000000000000000000000000000000000000000000000000000001",
    "0x0000000000000000000000000000000000000000000000000000000000000002",
    "0x0000000000000000000000000000000000000000000000000000000000000003",
    "0x0000000000000000000000000000000000000000000000000000000000000004",
    "0x0000000000000000000000000000000000000000000000000000000000000005",
    "0x0000000000000000000000000000000000000000000000000000000000000006",
    "0x0000000000000000000000000000000000000000000000000000000000000007",
    "0x0000000000000000000000000000000000000000000000000000000000000008",
    "0x0000000000000000000000000000000000000000000000000000000000000009",
  ]

  useEffect(() => {
    async function getAllAuctions() {
      let auctions = []

      for (let index = 0; index < ids.length; index++) {
        try {
          const _auctions = await auctionContract.getAuction(ids[index]);
          auctions.push(_auctions)
        } catch (error) {
          console.error(error);
        }
      }
      console.log(auctions);
      setAllAuctions(auctions)
    }
    getAllAuctions()
  }, []);

  return (
    <div>
      <h2>Market Auctions</h2>

      {(allAuctions != null) && (
        <>
          {allAuctions.map(auction => {
            if (auction.owner !== "0x0000000000000000000000000000000000000000")
              return (<div className='mt-1 badge-dark p-2'>
                <p>Owner: {auction.owner}</p>
                <p>NFT Contract: {auction.nftContract}</p>
                <p>Token Contract: {auction.tokenContract}</p>
                <p>NFT ID: {auction.nftId}</p>
                <p>Highest Bid: {auction.highestBid}</p>
                <p>Highest Bidder: {auction.highestBidder}</p>
                <p>
                  Auction End Time: {auction.auctionEndTime.toString()}
                </p>
                <p>Ended: {auction.ended ? "Yes" : "No"}</p>
                <p>Is ERC20: {auction.isERC20 ? "Yes" : "No"}</p>
              </div>)
          })}

        </>
      )}
    </div>
  );
};

export default FetchMarketAuctions;
