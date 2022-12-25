// import './App.css';
import {ethers} from 'ethers'
import {useState,useEffect} from 'react'
import abi from './contract/chai.json'
import Buy from './components/Buy';
import Memos from './components/Memos';
function App() {
  const [state,setState]=useState({
    provider:null,
    singner:null,
    contract:null,

  })
  useEffect(()=>{
    const connectWallect=async ()=>{
      const contractAddress="0xf6b1037C2f30DAD5cD7E1422a56222beC7C7A7dD"
      const contractAbi=abi.abi
      try {
        const {ethereum} =window
        if(ethereum)
        {
          const account=await ethereum.request({
            method:"eth_requestAccounts",
          })
        }
        const provider=new ethers.providers.Web3Provider(ethereum)
        const signer=provider.getSigner()
        const contract=new ethers.Contract(contractAddress,contractAbi,signer)
        setState({provider,signer,contract})
      } catch (error) {
        console.log(error)
      }

    }
    connectWallect()
  },[])
  console.log(state)

  return (
    <div className="App">
   
      <Buy state={state}/>

      <Memos state={state}/>
    </div>
  );
}

export default App;
