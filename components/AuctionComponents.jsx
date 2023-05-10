import React, { useState } from 'react';

import CreateNativeAuction from './auction/CreateNativeAuction';
import CreateERC20Auction from './auction/CreateERC20Auction';
import BidNativeToken from './auction/BidNativeToken';
import BidERC20Token from './auction/BidERC20Token';
import FetchMarketAuctions from './auction/FetchMarketAuctions';
import GetAuctionId from './auction/GetAuctionId';
import GetAuction from './auction/GetAuction';
import ClaimAuction from './auction/ClaimAuction';
import WithdrawPendingReturns from './auction/WithdrawPendingReturns';
import WithdrawPendingFunds from './auction/WithdrawPendingFunds';
import CheckPendingReturn from './auction/CheckPendingReturn';
import CheckPendingFund from './auction/CheckPendingFund';
import { fuseAuctionAddress } from '../hooks/contracts/ContractAddresses';

const AuctionComponents = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        'Get Auctions',
        'Create Auctions',
        'Bid on Auctions',
        'Claim & Withdraw Auctions',
        'Check Pending',
        'All Auctions',
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 0:
                return (
                    <>
                        <GetAuctionId />
                        <GetAuction />
                    </>
                )
            case 1:
                return (
                    <>
                        <CreateNativeAuction />
                        <CreateERC20Auction />
                    </>
                );
            case 2:
                return (
                    <>
                        <BidNativeToken />
                        <BidERC20Token />
                    </>
                );
            case 3:
                return (
                    <>
                        <ClaimAuction />
                        <WithdrawPendingReturns />
                        <WithdrawPendingFunds />
                    </>
                );
            case 4:
                return (
                    <>
                        <CheckPendingReturn />
                        <CheckPendingFund />
                    </>
                );
            case 5:
                return (
                    <>
                        <h1>All Auction</h1>
                        <FetchMarketAuctions />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>Fuse Auction DApp</h1>
            <p>Contract Address : {fuseAuctionAddress}</p>
            <div className="tabs">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={index === activeTab ? 'active' : ''}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <hr className="hr" />
            {renderContent()}
        </div>
    );
};

export default AuctionComponents;
