import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = () => {
const context = useContext(GlobalContext)

const {deleteTransaction} = useContext(GlobalContext);

  return (
    <>
    <h3>History</h3>
      <ul id="list" className="list">
        {context.transactions.map((i)=>(
            <li className={i.amount < 0 ? "minus" : "plus"} key={i.id} >
            {i.text} <span>{i.amount < 0 ? "-" : "+"} ${Math.abs(i.amount)}</span><button className="delete-btn" onClick={()=>{deleteTransaction(i.id)}} >x</button>
          </li> 
        ))}
      </ul>
    </>
  )
}

export default Transaction