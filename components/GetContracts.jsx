import { fuseAuctionAddress, NFT_ContractAddress, GLDTokenAddress } from '../hooks/contracts/ContractAddresses';

const GetContracts = () => {

    function shortAddr(str) {
        if (str.length <= 8) {
            return str;  // Return original string if it's short.
        }

        const firstFour = str.substring(0, 4);
        const lastFour = str.substring(str.length - 4);

        return `${firstFour}...${lastFour}`;
    }

    return (
        <div className='row'>
            <div>
                <p>Fuse Contract Address :
                    <span
                        className='badge-dark pointer'
                        title='click to copy'
                        onClick={() => navigator.clipboard.writeText(fuseAuctionAddress)}>
                        {shortAddr(fuseAuctionAddress)}
                    </span>
                </p>
            </div>

            <div>
                <p>NFT Contract Address :
                    <span
                        className='badge-dark pointer'
                        title='click to copy'
                        onClick={() => navigator.clipboard.writeText(NFT_ContractAddress)}>
                        {shortAddr(NFT_ContractAddress)}
                    </span>
                </p>
            </div>

            <div>
                <p>Token Contract Address :
                    <span
                        className='badge-dark pointer'
                        title='click to copy'
                        onClick={() => navigator.clipboard.writeText(GLDTokenAddress)}>
                        {shortAddr(GLDTokenAddress)}
                    </span>
                </p>
            </div>

        </div>
    );
};

export default GetContracts;