require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remember unveil inner glimpse flip two'; 
let testAccounts = [
"0x762b3d802f26e91ba5026a084281f87f883de60d3eb7800417bf6afb993bb808",
"0xecbf3b10ec2823475d315b37fc6c96516e8f27b17a268f72023f39ad8b72a316",
"0xd62246ba1f361b9b5347af8cfec84809e35196aea65963cd1397d5cf3ae5efe0",
"0x1d26f73f3cabddbcdf0ca3f8d8e2a78deb35128ef10e959bb626e3c67d6e928b",
"0x70cbb0803696a305b8d86c4d3e54b36a2912fec6ccee3b9a171d44b6c5352cdc",
"0xfb5325402c97570cd49f55f95f18c82aa436a926bc6c8841f0a53b11f35da5d1",
"0x511183f845f33b91a89086e465670042929a3bc34beedb10f4882d5dd9dc7bcc",
"0xcc630a7b3cbd80ba1ef9193957b862bb914b6c05a3d6ccb364d1c99f0324f694",
"0xfb635a742bca3514b93d51488207dcedc1c21292738e38768c61eda52780c520",
"0x0a992a43f2a05ef7cccea45f0a4d7999080c69a9528b7fd413f2f25314863ad0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

