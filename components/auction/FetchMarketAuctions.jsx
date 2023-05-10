import React, { useEffect, useState } from 'react';
import { fetchMarketAuctions } from '../../hooks/contracts/FuseAuction';

const FetchMarketAuctions = () => {

  const [allAuctions, setAllAuctions] = useState(null)

  useEffect(() => {
    async function allAuctions() {
      await fetchMarketAuctions();
    }
    allAuctions()
  }, []);

  return (
    <div>
      <h2>Market Auctions</h2>

    </div>
  );
};

export default FetchMarketAuctions;
