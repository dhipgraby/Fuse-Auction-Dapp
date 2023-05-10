import React, { useState } from 'react';
import { getAuction } from './path/to/your/contract/functions';

const GetAuction = () => {
    const [auctionId, setAuctionId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await getAuction(auctionId);
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
            <button type="submit">Get Details</button>
        </form>
    );
};

export default GetAuction;