import React, { useState } from "react";
import { useAccount } from "wagmi";

const CheckOwner = ({
    nftContract
}) => {

    const [userAddress, setUserAddress] = useState("")
    const [owner, setOwner] = useState("");
    const [nftIds, setNftIds] = useState([]);
    const [userNftIds, setUserNftIds] = useState([]);

    const account = useAccount({
        onConnect({ address }) {
            setUserAddress(address)
        },
    });

    const handleOwnerTokens = async () => {
        try {
            const ids = await nftContract.ownerTokens(owner);
            setNftIds(ids)
            setOwner(owner)
        } catch (err) {
            setOwner("No owner")
            console.error(err);
        }
    };

    const handleUserTokens = async () => {
        try {
            const ids = await nftContract.ownerTokens(userAddress);
            setUserNftIds(ids)
        } catch (err) {            
            console.error(err);
        }
    };
    return (
        <div className="mt-1">
            <small>User Token Ids</small>
            <br />
            <button className="blue-btn" onClick={handleUserTokens}>Get Token Ids</button>
            {(userNftIds.length > 0) &&
                <div className="badge-dark mt-2">
                    <p>
                        Owner: {userAddress}
                        <br />
                        Owned IDs: {userNftIds.map(id => {
                            return ` ${id},`;
                        })}
                    </p>
                </div>
            }

            <div className="mt-1">
                <small>Check token Ids owned By address</small>

                <div className="row">
                    <input
                        type="text"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                        placeholder="Address"
                    />
                    <button className="blue-btn" onClick={handleOwnerTokens}>Get By Address</button>
                </div>
            </div>
            {(nftIds.length > 0) &&
                <div className="badge-dark mt-2">
                    <p>
                        Owner: {owner}
                        <br />
                        Owned IDs: {nftIds.map(id => {
                            return ` ${id},`;
                        })}
                    </p>
                </div>
            }
        </div>
    );
}

export default CheckOwner;
