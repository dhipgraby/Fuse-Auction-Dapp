import React, { useState } from "react";
import { safeMint, approveForAll,NFT_ContractAddress } from "../../hooks/contracts/NFTContract";

const NFTContract = () => {
    const [recipientAddress, setRecipientAddress] = useState("");
    const [operatorAddress, setOperatorAddress] = useState("");

    // Call these functions inside event handlers like button clicks
    const handleSafeMint = async () => {
        if (recipientAddress == "") {
            console.log('Address is empty');
            return
        }
        await safeMint(recipientAddress);
    };

    const handleApproveForAll = async () => {
        if (operatorAddress === "") {
            console.log("Operator address is empty");
            return;
        }
        await approveForAll(operatorAddress);
    };

    return (
        <div>

            <h1>NFT Contract</h1>
            <p>Contract address : {NFT_ContractAddress}</p>
            {/* Add your UI components and event handlers here */}
            <input
                type="text"
                value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
                placeholder="Recipient Address"
            />
            <button onClick={handleSafeMint}>Safe Mint</button>
            <br />
            <br />
            <input
                type="text"
                value={operatorAddress}
                onChange={(e) => setOperatorAddress(e.target.value)}
                placeholder="Operator Address"
            />
            <button onClick={handleApproveForAll}>Approve for All</button>
        </div>
    );
};

export default NFTContract;
