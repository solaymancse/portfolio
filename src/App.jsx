import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { Portfolio } from './pages/Portfolio'
import { ContactPage } from './pages/ContactPage'
import { useEffect } from 'react'
import AOS from 'aos'


function App() {
useEffect(()=>{
AOS.init()
},[])

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='contact' element={<ContactPage/>}/>
      </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
