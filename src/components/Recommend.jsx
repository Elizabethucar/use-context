import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Recommend = () => {
  const user = useContext(UserContext)
  return (
    <div>
      <h1>Hello {user}</h1>
      <h2>Your Recommendations</h2>
    </div>
  )
}

export default Recommend