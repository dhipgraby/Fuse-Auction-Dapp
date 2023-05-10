import React, { useEffect } from 'react';
import { getAuctionId } from './path/to/your/contract/functions';

const GetAuctionId = () => {
  useEffect(() => {
    getAuctionId();
  }, []);

  return (
    <div>
      <h2>Auction ID</h2>
      {/* Display auction ID here */}
    </div>
  );
};

export default GetAuctionId;
