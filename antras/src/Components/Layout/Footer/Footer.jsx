
import { Link } from 'react-router-dom'
import './Footer.css'
import fb from './fb.svg'
import tt from './tt.svg'
import React, { useEffect, useRef, useState } from "react";

export const RevealOnScroll = ({ children, effect }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", onWindScroll);
    return () => {
      window.removeEventListener("scroll", onWindScroll);
    };
  }, []);

  
  if(!effect) {
    effect = "animate-fade-up"
  }
console.log(effect)
  const classes = `transition-opacity duration-1000 opacity-100
      ${isVisible ? effect : "opacity-0"
    }`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

function Footer({ footNavLinks }) {
  return (
    <footer className='flex flex-wrap justify-around p-10 border-t-4 border-orange-300 '>
      <RevealOnScroll>
        <section className='text-center w-32'>
          <h1 className='text-4xl text-white font-bold'>Meniu</h1>
          <ul>
            {footNavLinks.map((link, key) => {
              return (
                link.name !== 'Pagrindinis' ? <Link key={key} to={link.to}>
                  <li id='nav-links' className='font-bold text-orange-300 hover:text-white p-0.5'>{link.name}</li>
                </Link> : ''
              )
            })}
          </ul>
        </section>
      </RevealOnScroll>



      <RevealOnScroll>
        <section className='text-center w-32'>
          <h1 className='text-4xl text-center text-white font-bold'>Contacts</h1>
          <ul className='font-bold'>
            <li><Link to={'/contact'} className='text-sky-600 text-xl italic font-bold hover:text-green-300'>Susisiekti</Link></li>
            <li className='text-orange-300 p-0.5'>Neringa@gmail.com</li>
            <li className='text-orange-300 p-0.5'>+370 123 12345</li>
          </ul>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className='w-32'>
          <h1 className='text-4xl text-center text-white font-bold'>Social</h1>
          <div className='flex'>
            <Link to='https://www.facebook.com/generida' target='blank'><img src={fb} alt="fb" width={'50px'} /></Link>
            <Link to='https://www.tiktok.com/@neringasala' target='blank'><img src={tt} alt="tt" width={'45px'} /></Link>
          </div>
        </section>
      </RevealOnScroll>


    </footer>
  )
}

export default Footer