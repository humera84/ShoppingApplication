import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

export default function Child2() {
    const {count} = useContext(AppContext);
    //let a =10;
    //console.log (`My age is ${a}`);
  return (
    <div>
      Child 2
      <p>Value of the update count from Child 1 is {count}</p>
      {/* <p>My age is {a}</p> */}
      <input type='file'></input>
    </div>
  )
}
