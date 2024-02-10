import React from 'react'
import logo from '../assets/travelLogo.svg'

const Header = () => {
  return (
    <>
      <header className='bg-clr-accent-orange flex justify-center items-center p-2 mt-8'>
        <nav className='flex justify-center items-center gap-4'> 
            <div className="logo">
                <img src={logo} className='' alt="" />
            </div>
            <h1 className='text-white'>My Travel Journal</h1>
        </nav>  
      </header>  
    </>
  )
}

export default Header