import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider);

export const ZombieFactory = (abi, contractAddress) => {
    const ZombieFactoryContract = new web3.eth.Contract(abi);
    return ZombieFactoryContract.at(contractAddress);
}