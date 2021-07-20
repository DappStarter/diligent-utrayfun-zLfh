require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remind purse include armed flower two'; 
let testAccounts = [
"0x4d04e09431311f75e0556e759ce60a1e7430731c7722a0f362faa9da57b4384c",
"0x96ff755118563be209e5d5c59b1c48a3b4fd6479710facbbeeb22cb600aad4b6",
"0x89b0019f87ce237b3ca5b4210d649c6fc3d1497ffb315973c96dc53b02b3eacd",
"0x5ff24f65c68cd6040b226d5f878cffd194620d8537d77c4418ed966d4610b235",
"0x5b9a8adf5e84bcaed0de20bb353262ae269c1b40e546ffaf5c8536e1f5ee0752",
"0x5609081e9212c43adab0e56d89f3090ccf5cad6f4872e12e202a108080ed1c73",
"0xa6547b946da2fe9ff3d0b7dd8a4b17565af722ac3d2c9cd970d0682e1ab9ea59",
"0xb3764cad08c1f37d2c3419b211feeb6102aa9d479b00cb04e7c8fe7b300d7dd6",
"0xf626f6afa0cd0196f8bd7e31280db8292a66abe5058491a8250e80e7febf015a",
"0xf6e484f214ef5b218a916c2643a0d29ec25d63e3645ca40dcf0ba95fc7b52ad7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


