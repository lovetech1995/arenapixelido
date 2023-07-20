import { getPaymentContract } from "../utils/web3Client";

export const getApprove = async (walletAddress, amount) => {
  const contract = await getPaymentContract();
  //   const weiValue = web3.utils.toWei(1, "ether");
  const transaction = await contract.methods
    .approve("0x92F564A9DA6c3BcCD38137E46bD446890CAfEE69", amount)
    .send({ from: walletAddress });
  console.log("Transaction", transaction);
  return transaction;
};
