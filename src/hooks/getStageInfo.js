import { getContract } from "../utils/web3Client";

export const getStageInfo = async () => {
  const stages = [];
  const contract = await getContract();
  const nb = await getStageNumber(contract);
  console.log("nb: ", nb);
  for (let index = 0; index < nb; index++) {
    const stage = await contract.methods.getStageInfo(index).call();
    stages.push(stage);
  }
  return stages;
};

const getStageNumber = async (contract) => {
  const stageNumber = await contract.methods.totalStages().call();
  return stageNumber;
};
