import React, { useEffect, useState } from 'react';

const GetAuctionId = ({
  auctionContract
}) => {

  const [auctionId, setAuctionId] = useState("")

  useEffect(() => {
    async function fetchAuctionId() {
      try {
        const currentId = await auctionContract.getAuctionId();
        setAuctionId(currentId);
      } catch (error) {
        console.error(error)
      }
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
