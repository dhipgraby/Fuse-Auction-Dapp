import React, { useState } from "react";

const ApproveForAll = ({
    nftContract
}) => {
    const [operatorAddress, setOperatorAddress] = useState("");

    const handleApproveForAll = async () => {
        if (operatorAddress === "") {
            console.log("Operator address is empty");
            return;
        }
        try {
            await nftContract.approveForAll(operatorAddress);
        } catch (err) {
            console.log(err);
        }

    };
    return (
        <div className="mt-1">
            <small>Approve for all to given address</small>
            <div className="row">
                <input
                    type="text"
                    value={operatorAddress}
                    onChange={(e) => setOperatorAddress(e.target.value)}
                    placeholder="Operator Address"
                />
                <button className="blue-btn" onClick={handleApproveForAll}>Approve for All</button>

            </div>
        </div>
    );
}

export default ApproveForAll;
