import React, { useState } from "react";

const MintController = ({
    nftContract
}) => {
    const [recipientAddress, setRecipientAddress] = useState("");

    const handleSafeMint = async () => {
        console.log(recipientAddress);
        if (recipientAddress == "") {
            console.log('Address is empty');
            return
        }
        
        try {
            console.log('minting:' + nftContract);
            await nftContract.safeMint(recipientAddress);
        } catch (err) {
            console.error(err);
        }

    };

    return (
        <div className="mt-1">
            <small>Mint NFT to address. Only owner</small>
            <div className="row">
                <input
                    type="text"
                    value={recipientAddress}
                    onChange={(e) => setRecipientAddress(e.target.value)}
                    placeholder="Recipient Address"
                />
                <button className="primary-btn" onClick={handleSafeMint}>Safe Mint</button>

            </div>
        </div>
    );
}

export default MintController;
