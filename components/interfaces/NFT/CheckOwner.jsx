import React, { useState } from "react";

const CheckOwner = ({
    nftContract
}) => {
    const [adddress, setAddress] = useState("");
    const [tokenId, setTokenId] = useState("");

    const handleSubmit = async () => {
        try {
            const owner = await nftContract.ownerOf(tokenId);
            setAddress(owner)
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className="mt-1">
            <small>Check Owner of given TokenId</small>
            <div className="row">
                <input
                    type="number"
                    value={tokenId}
                    onChange={(e) => setTokenId(e.target.value)}
                    placeholder="NFT id"
                />
                <button className="blue-btn" onClick={handleSubmit}>Check owner</button>
            </div>
            {(adddress) &&
                <div className="badge-dark mt-2">
                    <p>
                        Owner : {adddress}
                    </p>
                </div>
            }
        </div>
    );
}

export default CheckOwner;
