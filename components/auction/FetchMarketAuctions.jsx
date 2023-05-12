import React, { useEffect, useState } from 'react';

const FetchMarketAuctions = ({
  auctionContract
}) => {

  const [allAuctions, setAllAuctions] = useState(null)

  useEffect(() => {

    async function allAuctions() {
      try {
        const _auctions = await auctionContract.fetchMarketAuctions();
        setAllAuctions(_auctions)
      } catch (error) {
        console.error(error);
      }

    }
    allAuctions()
  }, []);

  return (
    <div>
      <h2>Market Auctions</h2>
      {/* {(allAuctions) && (
  <></>
)} */}
    </div>
  );
};

export default FetchMarketAuctions;
