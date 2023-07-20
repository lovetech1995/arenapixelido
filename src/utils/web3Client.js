import Web3 from "web3";
import abi from "../abi/abi.json";
import web3 from "web3";
import paymentAbi from "../abi/paymentAbi.json";

export const getContractNetwork = async () => {
  let contract = null;
  if (window.ethereum.networkVersion !== 56) {
    try {
      window.ethereum
        .request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: web3.utils.toHex(56) }],
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
  const contractAddress = "0x92F564A9DA6c3BcCD38137E46bD446890CAfEE69";
  const web3 = new Web3(window.ethereum);

  const contract = new web3.eth.Contract(abi, contractAddress);
  return contract;
};

export const getPaymentContract = async () => {
  const contractAddress = "0x55d398326f99059fF775485246999027B3197955";
  const web3 = new Web3(window.ethereum);

  const paymentContract = new web3.eth.Contract(paymentAbi, contractAddress);
  return paymentContract;
};
