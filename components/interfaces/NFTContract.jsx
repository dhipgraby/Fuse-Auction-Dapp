import React, { useState } from "react";
import { connectWallet, getNFTMockContract, safeMint } from "../../hooks/contracts/NFTContract";

const NFTContract = () => {
    const [recipientAddress, setRecipientAddress] = useState("");

    // Call these functions inside event handlers like button clicks
    const handleSafeMint = async () => {
        if (recipientAddress == "") {
            console.log('Address is empty');
            return
        }
        const provider = await connectWallet();
        const contract = await getNFTMockContract(provider);
        await safeMint(contract, recipientAddress);
    };

    return (
        <div>

            <h1>NFT Contract</h1>
            {/* Add your UI components and event handlers here */}
            <input
                type="text"
                value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
                placeholder="Recipient Address"
            />
            <button onClick={handleSafeMint}>Safe Mint</button>
            <br />
        </div>
    );
};

export default NFTContract;
