import React from 'react'

function Consultation() {
    return (
        <main className='h-screen bg-black font-serif'>
            <section className='container m-auto p-32'>
                <h1 className='text-4xl text-center mb-20 text-orange-300'>Asmeninė konsultacija</h1>

                <p className='p-5  text-2xl text-justify text-orange-300'>
                    Rytietiška išmintis byloja, jog gyvenimo prasmė yra pažinti savo lemtį. O ją perpratus įgyvendinti.
                </p>

                <p className='p-5  text-2xl text-justify text-orange-300'>
                    Kiekvienas gyvas padaras, tad ir žmogus, į šį pasaulį ateina su tam tikru apribotų savybių rinkiniu, kurio negali pakeisti. Jas reikia priimti ir su jomis susitaikyti. Tai apima kūno konstituciją, gebėjimą priimti informaciją, talentus ir daugybę kitų savybių. Šią unikalią kombinaciją paverčiančia mus tuo, kas esame būtina pažinti ir gerbti. Tik tai padarius galima suvokti, ką geriausio gyvenime žmogus gali padaryti dėl savęs ir dėl greta esančių. Asmeninės konsultacijos metu ...
                </p>

                <ul className='list-decimal text-justify pl-20'>
                    <li className='text-orange-300'>ASMENINĖ KONSULTACIJA – ATSAKYMAS Į VISUS JUMS RŪPIMUS KLAUSIMUS (konsultacija vyksta KORTŲ PAGALBA)</li>
                    <li className='text-orange-300'>KARMINIS ATSINEŠIMAS (karminio skaičiaus nustatymas PAGAL GIMIMO DATĄ)</li>
                    <li className='text-orange-300'>POROS SUDERINAMUMAS (pagal gimimo datas)</li>
                    <li className='text-orange-300'>VERSLO KLAUSIMŲ KONSULTACIJA </li>
                </ul>
            </section>
        </main>
    )
}

export default Consultation