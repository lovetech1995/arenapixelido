import { getContract } from "../utils/web3Client";

export const getUserSlots = async (walletAddress) => {
  const contract = await getContract();
  const slots = await contract.methods.slotsPerUser(walletAddress).call();
  return parseInt(slots);
};
