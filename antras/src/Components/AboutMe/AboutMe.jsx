import React, {useEffect} from 'react'

function AboutMe() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


  return (
    <main className=" bg-black font-serif">
        <section className='container m-auto p-32'>
            <h1 className='text-4xl text-center mb-20 text-orange-300'>Apie mane</h1>

            <p className='p-5  text-2xl text-justify text-orange-300'>Gyvenimo knyga neturi juodraščio. Tik atvertę naują puslapį galime pamatyti, kaip pamažu, o kartais ir pasiutusiai greitai jis užsipildo. Tai baugina, trikdo, o kartais net priverčia per ilgai užsibūti ten, kur mums ne vieta. Visgi pasaulis nesustabdomai keičiasi ir toje pokyčių karuselėje kiekvienas galiausiai būna priverstas susitikti su pačiu savimi. 
            </p>

            <p className='p-5  text-2xl text-justify text-orange-300'>Esu tam, kad padėčiau visiems norintiems susipažinti su tikruoju savimi. Sielos paveikslas ne visada atitinka susikurtus lūkesčius. Juk ir neturi atitikti! Visgi turime galią šiek tiek pataisyti spalvas bei pustonius. Ir taip patobulėję, išdrįsti žengti nauju, gerokai šviesesniu taku. Kviečiu statyti naujus tiltus ir kreipti savosios gyvenimo upės vagas su sąmoningumu bei dėkingumu. Tai padaryti kiekvienas turi pats. Aš galiu tik palydėti it jau šioje kelionėje ne kartą pabuvosi gidė ar it palaikanti mokytoja išmokyti naudotis pačiais efektyviausiais įrankiais, kuriais mus apdovanojo gamta – dėmesingumu, kvėpavimu ir nuo prietarų laisva mąstysena. 
            </p>

            <p className='p-5  text-2xl text-justify text-orange-300'>Pažinimo ir tobulėjimo keliu pati einu jau daugiau nei dvi dešimtis metų. Per savo karjerą mėginau žiūrėti į žvaigždes, stengiausi net kyštelti nosį anapus ar perskaityti subtiliųjų energijų padiktuotas žinutes psichologijos kortose. Šie įdomūs, bet sunkiai įveikiami laipteliai galiausiai mane atvedė prie suvokimo, kad tikroji jėga slypi pačio žmogaus sielos, kūno ir proto harmonijoje. Būtent čia glūdi įstabi savęs ir pasaulio pažinimo dovana, kurią tikslingai veikdami kiekvienas galime išpakuoti. Tad, jeigu jaučiatės pasirengę pasikeisti, kviečiu prisijungti prie manęs. Kartu galėsime pažvelgti į praeitį, dabartį ir ateitį bei nuspręsti, kokius žingsnius reikia žengti, kad taptumėte laimingesni ir sėkmingesni.
            </p>

        </section>
    </main>
  )
}

export default AboutMe;