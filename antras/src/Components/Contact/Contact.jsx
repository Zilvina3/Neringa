import React, { useState, useEffect } from 'react'

function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [response, setResponse] = useState('')

    return (
        <main className='h-screen bg-black py-28'>
            <h1 className='text-8xl angel text-orange-300 text-center'>Contact</h1>
            <section className='container mx-auto flex justify-center'>

                <form className='flex flex-col w-2/5 m-7'
                    onSubmit={(e) => {
                        e.preventDefault()

                        setResponse('Jusu zinute issiusta')
                        e.target.reset()
                    }}>
                    <div className='flex flex-col m-3'>
                        <label className='w-32 text-2xl my-2 text-orange-300' htmlFor='fname' >First Name</label>
                        <input required className='w-64 rounded-md p-2 bg-slate-600 outline-orange-300' type="text" id="fname" name="firstname" placeholder="Your name.." />
                    </div>

                    <div className='flex flex-col m-3'>
                        <label className='w-32 text-2xl my-2 text-orange-300'>Email</label>
                        <input required className='w-64 rounded-md p-2 bg-slate-600' type="email" id="email" name="email" placeholder="Your email.." />
                    </div>
                    <div className='flex flex-col m-3 '>
                        <label className='w-32 text-2xl my-2 text-orange-300'>Subject</label>
                        <textarea required className='w-3/5 rounded-md p-2 bg-slate-600' id="subject" name="subject" placeholder="Write something.." ></textarea>
                    </div>


                    <div className='m-3'>
                        <button type="submit" className='
                          rounded-xl py-3 px-10 bg-orange-300 font-bold text-black
                         hover:bg-orange-400' >Submit</button>
                    </div>
                    <div
                        className='text-green-500 p-5 text-xl'
                    >{response ? response : ''}</div>
                </form>
            </section>
        </main>
    )
}

export default Contact