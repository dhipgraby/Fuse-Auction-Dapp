import React, { useEffect, useState } from 'react';
import { shortStr } from '../../helpers/functions';

const GetAuctionId = ({
  auctionContract
}) => {

  const noId = "0x0000000000000000000000000000000000000000000000000000000000000000"
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
        <small
          className='ml-1 badge-dark pointer'
          title='click to copy'
          onClick={() => navigator.clipboard.writeText(auctionId)}
        >{(auctionId == noId) ? 'Not current auction started' : shortStr(auctionId)} </small></p>
      {/* Display auction ID here */}
    </div>
  );
};

export default GetAuctionId;
