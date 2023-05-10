
// Example usage within a React component
const NFTContract = () => {
    // Call these functions inside event handlers like button clicks
    const handleSafeMint = async () => {
        const provider = await connectToEthereum();
        const contract = await getNFTMockContract(provider, 'NFTMockContractAddress');
        await safeMint(contract, '0xRecipientAddress');
    };

    const handleMintWithTokenId = async () => {
        const provider = await connectToEthereum();
        const contract = await getNFTMockContract(provider, 'NFTMockContractAddress');
        await mintWithTokenId(contract, '0xRecipientAddress', 1);
    };

    return (
        <div>
            {/* Add your UI components and event handlers here */}
            <button onClick={handleSafeMint}>Safe Mint</button>
            <button onClick={handleMintWithTokenId}>Mint with Token ID</button>
        </div>
    );
};

export default NFTContract;
