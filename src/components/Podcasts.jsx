import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Podcasts = () => {
  const user = useContext(UserContext)
  return (
    <div>
      <h1>Hello {user}</h1>
    </div>
  )
}

export default Podcasts