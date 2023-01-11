import './App.css'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import About from './About'
import Home from './Home'
import History from './History'

function App() {

  return (
    <>


      <Routes>
        <Route index element={<Home />} />
        <Route path="/haqqımızda/" element={<About />}>
          <Route path="tariximiz" element={<History />} />
          <Route path="rehberlik" element={<Contact />} />
        </Route>
      </Routes>
    </>

  )
}

export default App
