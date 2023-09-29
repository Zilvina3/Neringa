import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import neringaLogo from './ns.png'



function Header({ NavItems }) {

    

    return (
        <header className='sticky top-0 bg-slate-900 py-5 border-b-4 border-orange-300 z-10'>
            <nav className='flex flex-wrap justify-around mx-20'>
                <Link to={'/'} className='self-center'>
                    <img id='logo' className='text-3xl text-orange-300' src={neringaLogo} alt="Neringa" width={'200px'} />
                </Link>


                <ul className='flex flex-wrap justify-center'>
                    {NavItems.map((item, key) => {
                        return (
                            <li key={key} className='p-5'>
                                <Link className='font-bold text-orange-300 hover:text-white' id='nav-links' to={item.to}>{item.name}</Link>
                            </li>
                )
                    })}
                </ul>

            </nav>
        </header>
    )
}

export default Header