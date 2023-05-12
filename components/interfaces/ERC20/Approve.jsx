import React, { useState } from "react";

const Approve = ({
    tokenContract
}) => {
    const [account, setAccount] = useState("");
    const [amount, setAmount] = useState("");

    const handleMintTokens = async () => {
        await tokenContract.approve(account, amount);
    };
    return (
        <>
            <small>Approve amount</small>
            <div className="row">
                <input
                    type="text"
                    placeholder="Account Address"
                    onChange={(e) => setAccount(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Amount"
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button
                    className="success-btn"
                    onClick={handleMintTokens}>Approve</button>
            </div>
        </>
    );
}

export default Approve;
