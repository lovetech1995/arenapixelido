import Web3 from "web3";
import abi from "../abi/abi.json";
import web3 from "web3";
import paymentAbi from "../abi/paymentAbi.json";

export const getContractNetwork = async () => {
  let contract = null;
  if (window.ethereum.networkVersion !== 97) {
    try {
      window.ethereum
        .request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: web3.utils.toHex(97) }],
        })
        .then(() => {
          contract = getContractNetwork();

          return contract;
        });
    } catch (err) {
      console.log({ err });
    }
  } else {
    contract = getContractNetwork();

    return contract;
  }
};

export const getContract = () => {
  const contractAddress = "0x56F803CDe2c37883a5D20aEd7Cb7C8d24F03e295";
  const web3 = new Web3(window.ethereum);

  const contract = new web3.eth.Contract(abi, contractAddress);
  return contract;
};

export const getPaymentContract = async () => {
  const contractAddress = "0x1d9214523f53CEF4D4770D404a5d8cce4Ef43C5d";
  const web3 = new Web3(window.ethereum);

  const paymentContract = new web3.eth.Contract(paymentAbi, contractAddress);
  return paymentContract;
};
