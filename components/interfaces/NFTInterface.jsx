import React, { useEffect, useContext } from "react";
import NFTContract from "../../hooks/contracts/NFTContract";
import MintController from "./NFT/MintController";
import ApproveForAll from "./NFT/ApproveForAll";
import CheckOwner from "./NFT/CheckOwner";
import GetContracts from "../GetContracts";
import UserNFTs from "./NFT/UserNFTs";

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
            <p>Mint free nft to any address</p>
            <div className="mb-2">
                <GetContracts />
            </div>
            <MintController nftContract={nftContract} />
            <ApproveForAll nftContract={nftContract} />
            <CheckOwner nftContract={nftContract} />
            <UserNFTs nftContract={nftContract} />
        </div>
    );
};

export default NFTInterface;
