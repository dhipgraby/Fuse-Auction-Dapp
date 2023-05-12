import React, { useState } from 'react';

const CheckPendingFund = ({ auctionContract }) => {
    const [auctionId, setAuctionId] = useState('');
    const [userAddress, setUserAddress] = useState('');

    const handleCheck = async () => {
        try {
            await auctionContract.checkPendingFund(auctionId, userAddress);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Check Pending Fund</h2>
            <input
                type="text"
                placeholder="Auction ID"
                value={auctionId}
                onChange={(e) => setAuctionId(e.target.value)}
            />
            <input
                type="text"
                placeholder="User Address"
                value={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
            />
            <button onClick={handleCheck}>Check</button>
        </div>

    );
};

export default CheckPendingFund;