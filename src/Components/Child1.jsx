import React, { createContext } from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

export default function Child1() {
    const {count,setCount} = useContext(AppContext);
    const handleUpdate = () =>{
        setCount(count + 1);
    }
  return (
    <div>
      Child 1
      <button onClick = {handleUpdate}>Update Count</button>
    </div>
  )
}
