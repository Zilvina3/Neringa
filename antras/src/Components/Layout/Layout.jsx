import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function Layout({ children }) {

    const navLinks = [
        {
            name: 'Pagrindinis',
            to: '/'
        },
        {
            name: 'Apie mane',
            to: '/'
        },
        {
            name: 'Burimo konsultacija',
            to: '/'
        },
        {
            name: 'Psichoterapija',
            to: '/'
        },
        {
            name: 'Meditacija',
            to: '/'
        },
        {
            name: 'Atsiliepimai',
            to: '/'
        }
    ]

  return (
    <div>
        <Header NavItems={navLinks} />
        {children}
        <Footer footNavLinks={navLinks} />
    </div>
  )
}

export default Layout