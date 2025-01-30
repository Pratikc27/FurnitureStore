import { useEffect, useState } from 'react'

import './App.css'
import abi from "./contractJson/furniture.json";
import { ethers } from 'ethers';
import Order from './components/Order';
import Furniture from './components/Furniture';

function App() {
const [state, setState] = useState({
  provider: null,
  signer: null,
  contract: null,
});

const [account, setAccount] = useState('not connected');

useEffect(() => {
const template = async () => {
  const contractAddress = "0xD6242CA8Df1BfB786411B1aBb908FC2Aa6684f61";
  const contractABI = abi.abi;
  try{
    const { ethereum } = window;
    const account = await ethereum.request({ method: "eth_requestAccounts" });
    window.ethereum.on("accountsChanged", () => {
      window.location.reload();
    })
    setAccount(account);
    const provider = new ethers.providers.Web3Provider(ethereum);//to read the blockchain
    const signer = provider.getSigner();//to write the blockchain
    const contract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    )
    console.log(contract,'==')
    setState({provider, signer, contract});
  }catch(error){
    alert(error);
  }
}
template();
}, []);

  return (
    <div><h1>Furniture Shop</h1><br/>
    <div style={{
                backgroundColor: '#f8f9f9',
                color: 'red',
                padding: '10px',
                textAlign: 'center',
                borderBottom: '1px solid #ccc',
                fontSize: '16px',
                fontWeight: 'bold',
            }}>
                ⚠️ You must connect with MetaMask to use this website. Please ensure MetaMask is installed and connected.
            </div>
      address: ${account}
      <Order state={state} />
      <Furniture state={state} />
    </div>
  )
}

export default App
