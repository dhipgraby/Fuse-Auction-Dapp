import React, { useEffect } from "react";
import { NFT_ContractAddress } from "../../hooks/contracts/ContractAddresses";
import NFTContract from "../../hooks/contracts/NFTContract";
import MintController from "./NFT/MintController";
import ApproveForAll from "./NFT/ApproveForAll";
import CheckOwner from "./NFT/CheckOwner";


const NFTInterface = () => {

    const nftContract = new NFTContract();

    useEffect(() => {
        (async () => {
            await nftContract.connect();
        })();
    }, []);

    return (
        <div>
            <h1>NFT Contract</h1>
            <div className="mb-2">
                <p>Contract address : <span className="badge-dark ml-1">{NFT_ContractAddress}</span></p>
            </div>
            <MintController nftContract={nftContract} />            
            <ApproveForAll nftContract={nftContract} />
            <CheckOwner nftContract={nftContract} />
        </div>
    );
};

export default NFTInterface;
