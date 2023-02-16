const productBookingabi = require("./abi/productBooking.json");
const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRODUCTBOOKINGCONTRACT_ADDRESS =
  process.env.PRODUCTBOOKINGCONTRACT_ADDRESS;
// Network
const Web3 = require("web3");
const localKeyProvider = new HDWalletProvider({
  privateKeys: [PRIVATE_KEY],
  providerOrUrl: "https://goerli.infura.io/v3/b80bfe537a2f452e9b39d501281a2fd1",
});
const web3 = new Web3(localKeyProvider);
exports.web3 = web3;

// Contracts
const contracts = {
  productBookingAddress: PRODUCTBOOKINGCONTRACT_ADDRESS,
};
exports.contracts = contracts;

exports.productBooking = new web3.eth.Contract(
  productBookingabi,
  contracts.productBookingAddress
);

// exports.defenderAutotaskWebhook = "https://api.defender.openzeppelin.com/autotasks/47e03ab2-e6d7-4cbc-ade0-e4fc3bbbc2fa/runs/webhook/262118f8-439f-476c-bc75-c29d406b500e/PwDz7WvsAPjbBD9BtLXKvw"
// exports.defenderSecret = process.env.DEFENDER_API_SECRET
