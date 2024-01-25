
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Recommend from '../src/components/Recommend'
import Dashboard from '../src/components/Dasboard'
import Podcasts from '../src/components/Podcasts'
import Home from '../src/components/Home'
import { UserContext } from './contexts/UserContext';
import { useState } from 'react'


function App() {
  const [user, setUser] = useState('Lizzy')
  return (
    <div>

      <Router>
        <UserContext.Provider value={[user, setUser]}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/recommend' element={<Recommend />} />
            <Route path='/podcasts' element={<Podcasts />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
