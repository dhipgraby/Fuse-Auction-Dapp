import React, { useState } from "react";

const GetAllowance = ({
    tokenContract
}) => {
    const [account, setAccount] = useState("");
    const [spender, setSpender] = useState("");
    const [allowance, setAllowance] = useState("");

    const handleSubmit = async () => {
        const checkallowance = await tokenContract.accountAllowance(account, spender);
        setAllowance(checkallowance)
    };
    return (
        <>
        <small>Get amount allowed to spend from spender address</small>
            <div className="row">
                <input
                    type="text"
                    placeholder="Owner Address"
                    onChange={(e) => setAccount(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Spender"
                    onChange={(e) => setSpender(e.target.value)}
                />
                <button className="blue-btn" onClick={handleSubmit}>Check</button>

                {(allowance) && (
                    <div className="badge-dark pt-1">
                        <p>Allowance: {allowance}</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default GetAllowance;
