import logo from './logo.svg';
import './App.css';
import { DInput } from './components/DInput';
import {useEffect, useState} from 'react';
import { createZombie } from './utils/zombieUtils';
import Web3 from 'web3';

export default function App() {
  
  const [zombieName, setZombieName] = useState('');

  useEffect(() => {
    
    window.addEventListener('load', function() {

      // Checking if Web3 has been injected by the browser (Mist/MetaMask)
      if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3js = new Web3(web3.currentProvider);
      } else {
        // Handle the case where the user doesn't have web3. Probably
        // show them a message telling them to install Metamask in
        // order to use our app.
      }
    
      // Now you can start your app & access web3js freely:
      startApp()
    
    })
  }, [])
  const abi = {};

  const contractAddress = "";
  
  return (
    <div className='bg-gray-100/80'>
      <h1 className="text-xl font-bold underline mb-8">
        Please input the zombie name!
      </h1>
      <DInput label="input zombie name" value={zombieName} changeVal={setZombieName} />
      <button className="btn btn-outline btn-primary" onClick={e => {
        debugger;
        createZombie(abi, contractAddress, zombieName);
        }}>Primary</button>
    </div>
  )
}
