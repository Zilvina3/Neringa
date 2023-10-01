import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import neringaLogo from './ns.png'



function Header({ NavItems }) {

    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [toggleNav, setToggleNav ] = useState(false)

    function getCurrentDimension(){
    	return {
      		width: window.innerWidth,
      		height: window.innerHeight
    	}
  	}

      useEffect(() => {
        const updateDimension = () => {
              setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);

    
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
  }, [screenSize])

    return (
        <header className='sticky top-0 bg-slate-900 py-5 border-b-4 border-orange-300 z-10'>
            <nav className='flex flex-wrap justify-around mx-20 max-md:justify-between' id='nav'>
                <Link to={'/'} className='self-center'>
                    <img id='logo' className='text-3xl text-orange-300 max-sm:w-36' src={neringaLogo} alt="Neringa" width={'200px'} />
                </Link>

                <div className='hamburger' onClick={() => { 
                    if(toggleNav){
                        setToggleNav(false)
                    }else {
                        setToggleNav(true)
                    }
                     }}>
                    <div className='burger burger1 bg-orange-300'></div>
                    <div className='burger burger2 bg-orange-300'></div>
                    <div className='burger burger3 bg-orange-300'></div>
                </div>

              {screenSize.width > '1022' && <ul className={`flex flex-wrap justify-center animate-fade-down`}>
                    {NavItems.map((item, key) => {
                        return (
                            <li key={key} className={`p-5 text-center`}>
                                <Link className='font-bold w-full text-orange-300 hover:text-white ' id='nav-links' to={item.to}>{item.name}</Link>
                            </li>
                        )
                    })}
                </ul>}

               {toggleNav && <ul className={`flex flex-wrap justify-center animate-fade-down`}>
                    {NavItems.map((item, key) => {
                        return (
                            <li key={key} className={`p-5`}>
                                <Link className='font-bold text-orange-300 hover:text-white' id='nav-links' to={item.to}>{item.name}</Link>
                            </li>
                        )
                    })}
                </ul>}

            </nav>
        </header>
    )
}

export default Header