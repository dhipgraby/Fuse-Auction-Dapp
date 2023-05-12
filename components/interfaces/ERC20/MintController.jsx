import React, { useState } from "react";

const MintController = ({
    tokenContract
}) => {
    const [account, setAccount] = useState("");
    const [amount, setAmount] = useState("");

    const handleMintTokens = async () => {
        await tokenContract.mintTokens(account, amount);
    };
    return (
        <>
        <small>Mint <b>ERC20 GLD Token</b> to an account</small>
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
                <button className="primary-btn" onClick={handleMintTokens}>Mint Tokens</button>
            </div>
        </>
    );
}

export default MintController;
