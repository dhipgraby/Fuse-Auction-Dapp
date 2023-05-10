import React from 'react';

import CreateNativeAuction from './auction/CreateNativeAuction';
import CreateERC20Auction from './auction/CreateERC20Auction';
import BidNativeToken from './auction/BidNativeToken';
import BidERC20Token from './auction/BidERC20Token';
import FetchMarketAuctions from './auction/FetchMarketAuctions';
import GetAuctionId from './auction/GetAuctionId';
import ClaimAuction from './auction/ClaimAuction';
import GetAuction from './auction/GetAuction';
import WithdrawPendingReturns from './auction/WithdrawPendingReturns';
import WithdrawPendingFunds from './auction/WithdrawPendingFunds';
import CheckPendingReturn from './auction/CheckPendingReturn';
import CheckPendingFund from './auction/CheckPendingFund';

const App = () => {
    return (
        <div>
            <h1>Fuse Auction DApp</h1>

            <CreateNativeAuction />
            <CreateERC20Auction />
            <BidNativeToken />
            <BidERC20Token />
            <FetchMarketAuctions />
            <GetAuctionId />
            <ClaimAuction />
            <GetAuction />
            <WithdrawPendingReturns />
            <WithdrawPendingFunds />
            <CheckPendingReturn />
            <CheckPendingFund />
        </div>
    );
};

export default App;