///////
// This file contains constants that are always loaded regardless of the environment
///////

// Constants and defaults
const TOKEN_DECIMALS = 18;
const DEFAULT_CHAIN_ID = 4; //Rinkeby
const DEFAULT_CHAIN_NAME = "Rinkeby"; //Rinkeby
export const chainId = import.meta.env.VITE_BLOCKCHAIN_CHAIN_ID || DEFAULT_CHAIN_ID;
export const chainName = import.meta.env.VITE_BLOCKCHAIN_CHAIN_NAME || DEFAULT_CHAIN_NAME;

// Public getters
export const networkIsValid = (providerId: number): boolean => {
    return providerId == chainId;
};

// EVM Network Params
export const getNetworkParams = (_chainId: number = chainId) => {
    const chainParams = {
        chainId: `0x${chainId.toString(16)}`,
        chainName: import.meta.env.VITE_BLOCKCHAIN_CHAIN_NAME,
        blockExplorerUrls: [import.meta.env.VITE_BLOCKCHAIN_BLOCK_EXPLORER_URL],
        nativeCurrency: {
            name: "Ethereum",
            symbol: "ETH",
            decimals: TOKEN_DECIMALS,
        },
    };

    const unknownChainParams = {
        chainName: "Unsupported",
        blockExplorerUrls: "",
    };

    return _chainId == chainId ? chainParams : unknownChainParams;
};

/*
// Contracts
export const MESSAGENFT_CONTRACT_ID = 1;

export const getContractAddress = (contract_id: number, network: number = chainId) => {
    switch (contract_id) {
        /////////////////
        // Message NFT //
        /////////////////
        case MESSAGENFT_CONTRACT_ID:
            switch (network) {
                case Networks.ETH_RINKEBY:
                    return "0x4904a5D49DD25e68e89dd9654C757a05bD1790Ff";

                case Networks.ETH_MAINNET:
                default:
                    return "0xc62E3F02ED11E4f95ff8c8FC451882378C2fdba5";
            }
    }
};
*/
