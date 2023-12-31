import { useContext } from "react"
import React from 'react'
import { Data } from "../App"

const Edit = () => {
  const data = useContext(Data)
  
  const edit = (index) => {
    
  }
  
  return (
    <div>
      <button onClick={(index) => edit(index)}>edit</button>
    </div>
  )
}

export default Edit
