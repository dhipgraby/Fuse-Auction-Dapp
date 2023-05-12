import React, { useState } from "react";
import { ethers } from 'ethers';

const BalanceDisplay = ({
    tokenContract
}) => {
    const [account, setAccount] = useState("");
    const [balance, setBalance] = useState("");

    const handleGetBalance = async () => {
        const balance = await tokenContract.getBalance(account);
        setBalance(balance.toString())
    };

    return (
        <>
        <small>Address Balance</small>
            <div className="row">
                <input
                    type="text"
                    placeholder="Account Address"
                    onChange={(e) => setAccount(e.target.value)}
                />
                <button className="blue-btn" onClick={handleGetBalance}>Get Balance</button>
                {(balance) && (
                    <div className="badge-dark p-1 mt-1">
                        <p>Balance: {balance}</p>
                    </div>
                )}

            </div>
        </>
    );
}

export default BalanceDisplay;
