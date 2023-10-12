import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Consultation.css'

function Consultation() {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className='min-h-screen py-8 bg-black font-serif'>
            <section className='container m-auto p-32 max-sm:p-8 animate-fade-up animate-duration-1500 animate-ease-in'>
                <h1 className='text-4xl text-center mb-16 text-orange-300'>Asmeninė konsultacija</h1>

                <p className='p-5  text-2xl text-justify text-orange-300 '>
                    Rytietiška išmintis byloja, jog gyvenimo prasmė yra pažinti savo lemtį. O ją perpratus įgyvendinti.
                </p>

                <p className='p-5  text-2xl text-justify text-orange-300 mb-14'>
                    Kiekvienas gyvas padaras, tad ir žmogus, į šį pasaulį ateina su tam tikru apribotų savybių rinkiniu, kurio negali pakeisti. Jas reikia priimti ir su jomis susitaikyti. Tai apima kūno konstituciją, gebėjimą priimti informaciją, talentus ir daugybę kitų savybių. Šią unikalią kombinaciją paverčiančia mus tuo, kas esame būtina pažinti ir gerbti. Tik tai padarius galima suvokti, ką geriausio gyvenime žmogus gali padaryti dėl savęs ir dėl greta esančių. Asmeninės konsultacijos metu ...
                </p>

                <ul className='list-decimal text-justify ml-20 pl-10 py-2 border-4 border-slate-600 lg:w-4/5 max-lg:px-10
                max-lg:mx-0'>
                    <li className='text-orange-300 p-3'>ASMENINĖ KONSULTACIJA – ATSAKYMAS Į VISUS JUMS RŪPIMUS KLAUSIMUS (konsultacija vyksta KORTŲ PAGALBA)</li>
                    <li className='text-orange-300 p-3'>KARMINIS ATSINEŠIMAS (karminio skaičiaus nustatymas PAGAL GIMIMO DATĄ)</li>
                    <li className='text-orange-300 p-3'>POROS SUDERINAMUMAS (pagal gimimo datas)</li>
                    <li className='text-orange-300 p-3'>VERSLO KLAUSIMŲ KONSULTACIJA </li>
                </ul>


                <div className='text-center my-20' >
                    <button className=" bg-orange-300 font-bold hover:bg-orange-500 text-gray-800
          py-4 px-12   rounded-xl shadow-md hover:trasition hover:-translate-y-1 duration-300 delay-100"
                        onClick={() => { navigate('/contact') }}>
                        Susisiekti
                    </button>
                </div>



            </section>
        </main>
    )
}

export default Consultation