import React, { useState } from 'react';

const CheckPendingFund = ({ auctionContract }) => {
    const [auctionId, setAuctionId] = useState('');
    const [funds, setFunds] = useState('');

    const handleCheck = async () => {
        try {
            const _funds = await auctionContract.checkPendingFunds(auctionId);
            setFunds(_funds)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='mt-2'>
            <p>Check Pending ERC20 tokens</p>
            <input
                type="text"
                placeholder="Auction ID"
                value={auctionId}
                onChange={(e) => setAuctionId(e.target.value)}
            />
            <button className='blue-btn' onClick={handleCheck}>Check</button>
            {(funds) &&
                (<div className='badge-dark mt-2'>
                    <p>Funds: {funds}</p>
                </div>)
            }
        </div>

    );
};

export default CheckPendingFund;