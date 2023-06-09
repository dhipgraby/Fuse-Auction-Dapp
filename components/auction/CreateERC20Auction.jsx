import React, { useState } from 'react';

const CreateERC20Auction = ({
    auctionContract
}) => {
    const [itemId, setItemId] = useState('');
    const [biddingTime, setBiddingTime] = useState('');
    const [minimumBid, setMinimumBid] = useState('');
    const [nftContract, setNftContract] = useState('');
    const [tokenAddress, setTokenAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await auctionContract.createERC20Auction(itemId, biddingTime, minimumBid, nftContract, tokenAddress);
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create ERC20 Auction</h2>
            <input
                type="text"
                placeholder="Item ID"
                value={itemId}
                onChange={(e) => setItemId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Bidding Time"
                value={biddingTime}
                onChange={(e) => setBiddingTime(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder="Minimum Bid"
                value={minimumBid}
                onChange={(e) => setMinimumBid(e.target.value)}
            />
            <input
                type="text"
                placeholder="NFT Contract Address"
                value={nftContract}
                onChange={(e) => setNftContract(e.target.value)}
            />
            <input
                type="text"
                placeholder="Token Address"
                value={tokenAddress}
                onChange={(e) => setTokenAddress(e.target.value)}
            />
            <button className="primary-btn" type="submit">Create Auction</button>
        </form>
    );
};

export default CreateERC20Auction;
