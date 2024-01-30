import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Resume from './pages/Resume'
import Interiors from './pages/Interiors'
import Photography from './pages/Photography'
import Contacts from './pages/Contacts'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/aboutme' element={<AboutMe/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/interiors' element={<Interiors/>}/>
      <Route path='/photography' element={<Photography/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
    </Routes>
    </>
  )
}

export default App
