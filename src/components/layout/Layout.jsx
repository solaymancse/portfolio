import React from 'react'
import { Header } from './header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './footer/Footer'
import {HashLoader} from 'react-spinners'
import { useEffect, useState } from "react"

export const Layout = () => {
  const [spinner, setSpinner] = useState(undefined);

  useEffect(()=>{
    setTimeout(()=> {
     setSpinner(true)
    },3000)
  },[])
  return (
    <div>
      {!spinner ? <HashLoader color="#333333" className='spiner_section'/>: <>
        <Header/>
        <Outlet/>
        <Footer/> 
      </>}
       
    </div>
  )
}
