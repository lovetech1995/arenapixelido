import { getContract } from "../utils/web3Client";

export const getUserSlots = async (walletAddress) => {
  if (walletAddress) {
    const contract = await getContract();
    console.log({ contract });
    const slots = await contract.methods
      .slotsPerUser(walletAddress)
      .call()
      .catch((err) => console.log({ err }));

    return parseInt(slots);
  }
};
