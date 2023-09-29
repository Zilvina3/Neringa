import React, { useEffect } from 'react'
import './Home.css'
import { RevealOnScroll } from '../Layout/Footer/Footer';
import { useNavigate } from 'react-router-dom';


function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navigate = useNavigate();

  return (
    <main>
      <div className='main h-screen'>
        <section className='container pl-56 pt-20 animate-fade-right animate-once animate-ease-in'>
          <h1 className=' text-9xl angel text-orange-300 pt-10 pb-8'>Neringa Sala</h1>
          <p className='text-4xl angel text-orange-300'>Kaip atrasti savo kelia</p>
          <div className='py-10'><button className=" bg-orange-300 font-bold hover:bg-orange-500 text-gray-800
          py-4 px-12   rounded-xl shadow-md hover:trasition hover:-translate-y-1 duration-300 delay-100"
          onClick={() => {navigate('/contact')}}>
            Susisiekti
          </button>
          </div>
        </section>
      </div>

      <section className='border-t-2 border-orange-300 bg-black'>
        <RevealOnScroll effect={'animate-fade-right animate-once animate-ease-in'}>
        <div className='container w-2/5 ml-64 pt-14 pb-20'>
          <h1 className='text-5xl angel text-orange-300 py-9'>Apie mane</h1>
          <p className='pb-5 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam optio accusantium voluptatibus nam beatae vel voluptas saepe recusandae, fugiat magni facere sit esse ex, consectetur inventore ab? Dolorem, impedit doloremque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dicta nam dolorum iusto? Ex, at. Maiores, vero harum. Impedit quod assumenda est? Iure ullam ipsum rerum voluptate nam pariatur fugit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, minus dolorem cum, velit explicabo omnis beatae eum veniam adipisci iusto deleniti inventore architecto doloribus suscipit accusamus. Ipsam pariatur delectus ab?</p>
          <p className='pb-5 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum deleniti amet eius odit, cupiditate, quas quam facere quo dolores eligendi, consectetur quaerat praesentium tempora veritatis minus iusto a esse dolore.</p>
          <div>
            <button type='button' onClick={() => {navigate('/contact')}} className='py-5 px-8  rounded-xl bg-orange-300
              text-black font-bold hover:bg-orange-500 shadow-md hover:trasition hover:-translate-y-1 duration-300 delay-100'>Paklausk manes</button>
          </div>
          </div>
          </RevealOnScroll>
      </section>
      
    </main>
  )
}

export default Home;