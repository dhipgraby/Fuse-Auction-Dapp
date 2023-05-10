import React, { useState } from 'react';
import { checkPendingFund } from '../../hooks/contracts/FuseAuction';

const CheckPendingFund = () => {
    const [auctionId, setAuctionId] = useState('');
    const [userAddress, setUserAddress] = useState('');

    const handleCheck = async () => {
        await checkPendingFund(auctionId, userAddress);
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