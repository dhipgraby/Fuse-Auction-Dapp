import React, { useState, useEffect } from 'react';

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
import FuseAuctionContract from '../hooks/contracts/FuseAuction';
import GetContracts from './GetContracts';

const AuctionComponents = () => {

    const auctionContract = new FuseAuctionContract();

    useEffect(() => {
        (async () => {
            await auctionContract.connect();
        })();
    }, []);

    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        'Get Auctions',
        'Create Auctions',
        'Bid on Auctions',
        'Claim & Withdraw Auctions',
        'All Auctions',
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 0:
                return (
                    <>
                        <GetAuction auctionContract={auctionContract} />
                    </>
                )
            case 1:
                return (
                    <>
                        <CreateNativeAuction auctionContract={auctionContract} />
                        <CreateERC20Auction auctionContract={auctionContract} />
                    </>
                );
            case 2:
                return (
                    <>
                        <BidNativeToken auctionContract={auctionContract} />
                        <BidERC20Token auctionContract={auctionContract} />
                    </>
                );
            case 3:
                return (
                    <>
                        <ClaimAuction auctionContract={auctionContract} />
                        <hr />
                        <p>Funds from bidders holded by Escrow contracts. Unsuccesful bids</p>
                        <div className='row'>

                            <div>
                                <h2>Check funds</h2>
                                <CheckPendingReturn auctionContract={auctionContract} />
                                <CheckPendingFund auctionContract={auctionContract} />
                            </div>
                            <div className='ta-c w-60'>
                                <h2>Withdraw funds</h2>
                                <WithdrawPendingReturns auctionContract={auctionContract} />
                                <WithdrawPendingFunds auctionContract={auctionContract} />
                            </div>
                        </div>
                    </>
                );
            case 4:
                return (
                    <>
                        <h1>All Auction</h1>
                        <FetchMarketAuctions auctionContract={auctionContract} />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>Fuse Auction DApp</h1>

            <GetContracts />
            <div className='mt-2 mb-2'>
                <GetAuctionId auctionContract={auctionContract} />
            </div>

            <div className="tabs">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`tap-btn ` + (index === activeTab ? 'activeTap' : '')}
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
