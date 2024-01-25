import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

const Home = () => {
const [user, setUser] = useContext(UserContext)

  return (
    <div className='flex flex-col items-center px-8'>
      <div>
      <h1> {user}´s Home</h1>
      <button type='button' onClick={()=> setUser('Mary')}>Edit name</button>
      </div>
      <Link to='/dashboard'> Your Dashboard</Link>
      <Link to='/recommend'> Your Reccomendations</Link>
      <Link to='/podcasts'> Your Podcasts</Link>

    </div>
  )
}

export default Home