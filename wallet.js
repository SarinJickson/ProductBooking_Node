const bip39 = require("bip39");
const ethers = require("ethers");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { hdkey } = require("ethereumjs-wallet");

let count = 2;
function generateAddresses() {
  const mnemonic = bip39.generateMnemonic();
  console.log(mnemonic);
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  console.log(seed);
  const hdwallet = hdkey.fromMasterSeed(seed);
  console.log(hdwallet);

  const accounts = [];

  for (let i = 0; i < count; i++) {
    const wallet = hdwallet.derivePath(`m/44'/60'/0'/0/${i}`).getWallet();
    const address = "0x" + wallet.getAddress().toString("hex");
    const privateKey = wallet.getPrivateKey().toString("hex");
    const publicKey = wallet.getPublicKey().toString("hex");
    accounts.push({
      PublicAddress: address,
      Publickey: publicKey,
      Privatekey: privateKey,
    });
  }
  console.log(accounts);
}
generateAddresses();
