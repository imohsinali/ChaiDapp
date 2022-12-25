import {useState,useEffect} from 'react'

const Memos = ({state}) => {
    const [memos,setMemos]=useState([])
    const {contract}=state
    useEffect(()=>{
        const memosMessage=async()=>{
            const memos=await contract.getMemos()
            setMemos(memos)
        }
        contract &&memosMessage()
    },[contract])
  return (
    <div>
        <p>Messae</p>
        {
            memos.map((memo)=>
            <table>
                <tbody key={memo.timestamp}>
                    <td>{memo.name}</td>
                    <td>{memo.message}</td>
                    <td>{String(memo.timestamp)}</td>
                    <td>{memo.from}</td>



                </tbody>
            </table>)
        }
      
    </div>
  )
}

export default Memos
