import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Dasboard = () => {
const user = useContext(UserContext)

  return (
    <div>
      <h1> Hello {user}</h1>
      <h2>
      Dasboard
      </h2>
      </div>
  )
}

export default Dasboard