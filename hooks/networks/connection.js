
// Create a custom provider for Ganache
export const ganache = {
    id: 1337,
    name: "Ganache",
    network: "Ganache",
    nativeCurrency: {
        decimals: 18,
        name: "Ether",
        symbol: "ETH",
    },
    rpcUrls: {
        default: {
            http: ["http://127.0.0.1:8545"],
        },
        public: {
            http: ["http://127.0.0.1:8545"],
        },
    },
};

//FUSE SPARKNET TESTNET
export const fuseSpark = {
    id: 123,
    name: "Fuse Spark",
    network: "Fuse Spark",
    nativeCurrency: {
        decimals: 18,
        name: "Fuse",
        symbol: "Fuse",
    },
    rpcUrls: {
        default: {
            http: ["https://rpc.fusespark.io"],
        },
        public: {
            http: ["https://rpc.fusespark.io"],
        },
    },
};