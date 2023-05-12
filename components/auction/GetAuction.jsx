import React, { useState } from 'react';

const GetAuction = ({
    auctionContract
}) => {
    const [auctionId, setAuctionId] = useState('');
    const [current, setCurrent] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const auction = await auctionContract.getAuction(auctionId);
            setCurrent(auction)
        } catch (error) {
            console.error(error)
        }
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
                <>
                    {(current.isERC20) && (
                        <h3 className='mt-2'>ERC20 Auction type</h3>
                    )}
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
                </>
            )}

        </form>
    );
};

export default GetAuction;