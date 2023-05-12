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
import { fuseAuctionAddress, NFT_ContractAddress, GLDTokenAddress } from '../hooks/contracts/ContractAddresses';
import FuseAuctionContract from '../hooks/contracts/FuseAuction';

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
        'Check Pending',
        'All Auctions',
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 0:
                return (
                    <>
                        <GetAuctionId auctionContract={auctionContract} />
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
                        <WithdrawPendingReturns auctionContract={auctionContract} />
                        <WithdrawPendingFunds auctionContract={auctionContract} />
                    </>
                );
            case 4:
                return (
                    <>
                        <CheckPendingReturn auctionContract={auctionContract} />
                        <CheckPendingFund auctionContract={auctionContract} />
                    </>
                );
            case 5:
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
            <div className='mb-2'>
                <p className='mb-2'>Fuse Contract Address : <span className='badge-dark'>{fuseAuctionAddress}</span></p>
                <p className='mb-2'>NFT Contract Address : <span className='badge-dark'>{NFT_ContractAddress}</span></p>
                <p className='mb-2'>Token Contract Address : <span className='badge-dark'>{GLDTokenAddress}</span></p>
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
