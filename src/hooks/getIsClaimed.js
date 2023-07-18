import { getContract } from "../utils/web3Client";

export const getUserClaimed = async (stage, walletAddress) => {
  const contract = await getContract();
  const isClaimed = await contract.methods
    .userClaimIDO(stage, walletAddress)
    .call();
  return isClaimed;
};
