import React, { useState } from 'react';
import { getAuction } from '../../hooks/contracts/FuseAuction';

const GetAuction = () => {
    const [auctionId, setAuctionId] = useState('');
    const [current, setCurrent] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const auction = await getAuction(auctionId);
        setCurrent(auction)
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Get Auction Details</h2>
            <input
                type="text"
                placeholder="Auction ID"
                value={auctionId}
                onChange={(e) => setAuctionId(e.target.value)}
            />
            <button className="blue-btn" type="submit">Get Details</button>
            <br />
            {(current !== null) && (
                <div className='mt-2 badge-dark p-2'>
                    <p>Owner: {current.owner}</p>
                    <p>NFT Contract: {current.nftContract}</p>
                    <p>Token Contract: {current.tokenContract}</p>
                    <p>NFT ID: {current.nftId}</p>
                    <p>Highest Bid: {current.highestBid}</p>
                    <p>Highest Bidder: {current.highestBidder}</p>
                    <p>
                        Auction End Time: {current.auctionEndTime.toString()}
                    </p>
                    <p>Ended: {current.ended ? "Yes" : "No"}</p>
                    <p>Is ERC20: {current.isERC20 ? "Yes" : "No"}</p>
                </div>
            )}

        </form>
    );
};

export default GetAuction;