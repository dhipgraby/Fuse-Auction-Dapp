import React, { useEffect, useState } from 'react';
import { getAuctionId } from '../../hooks/contracts/FuseAuction';

const GetAuctionId = () => {

  const [auctionId, setAuctionId] = useState("")

  useEffect(() => {
    async function fetchAuctionId() {
      const currentId = await getAuctionId();
      setAuctionId(currentId);
    }

    fetchAuctionId();
  }, []);
  return (
    <div>
      <p>Current Auction ID:
        
        <small className='badge-dark'>{auctionId}</small></p>
      {/* Display auction ID here */}
    </div>
  );
};

export default GetAuctionId;
