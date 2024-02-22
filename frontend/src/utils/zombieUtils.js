import { ZombieFactory } from "./ZombieFactory"

export const createZombie = ({abi, contractAddress, _name}) => {
    debugger;
    const zombieFactory = ZombieFactory(abi, contractAddress);
    zombieFactory.createRandomZombie(_name);
}