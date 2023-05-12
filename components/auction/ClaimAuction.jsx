import React, { useState } from 'react';

const ClaimAuction = ({
    auctionContract
}) => {
    const [auctionId, setAuctionId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await auctionContract.claimAuction(auctionId);
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Claim Auction</h2>
            <input
                type="text"
                placeholder="Auction ID" value={auctionId}
                onChange={(e) => setAuctionId(e.target.value)}
            />
            <button className='success-btn' type="submit">Claim</button>
        </form>
    );
};

export default ClaimAuction;