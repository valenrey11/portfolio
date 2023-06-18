import { Header } from '../../components/header'
import { SectionProyect } from '../../components/sect-proyects'
import { SectionContact } from '../../components/sect-contact'
import { Footer } from '../../components/footer'
import './index.css'
import 'animate.css'
import valen from '../../assets/valen.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/Github.png'
import whatsapp from '../../assets/whatsapp.png'
import cv from '../../assets/CV-Valentin-Uriel-Rey.pdf'
const colorPredefinido = 'bg-[#9F3F4D]'

export function HomePage() {
  return (
    <>
      <Header />
      <section
        id='home'
        className=' flex w-full flex-col gap-4 px-3
            sm:flex-row  sm:gap-20 sm:px-40 sm:py-10'>
        <div className='first-part-container flex w-full flex-col pb-5  sm:justify-between'>
          <div className='clip flex h-full w-full justify-around pt-5 sm:flex-col sm:justify-between'>
            <div className='img-cont mx-auto w-60 rounded-full'>
              <img
                src={valen}
                alt='valen'
                className='rounded-full bg-[#9F3F4D]/80 drop-shadow-2xl'
              />
            </div>
            <div className='flex w-11 flex-col justify-around sm:w-full sm:flex-row sm:justify-evenly'>
              <a href='https://github.com/valenrey11' target='_blank' className=''>
                <img
                  src={github}
                  alt='github'
                  className='github w-9 rounded-full duration-100 hover:scale-125 hover:bg-[#9F3F4D]/80 hover:ease-in'
                />
              </a>
              <a
                href='https://www.linkedin.com/in/valentin-uriel-rey-703219228/'
                target='_blank'
                className=' '>
                <img
                  src={linkedin}
                  alt='linkedin'
                  className='github w-9 rounded duration-100 hover:scale-125 hover:bg-[#9F3F4D]/80 hover:ease-in'
                />
              </a>
              <a
                href='https://api.whatsapp.com/send?phone=541164013031&text=Hola%20valentin'
                target='_blank'
                className=' '>
                <img
                  src={whatsapp}
                  alt='whatsapp'
                  className='w-9 rounded-t-full rounded-br-full duration-100 hover:scale-125  hover:bg-[#9F3F4D]/80 hover:ease-in'
                />
              </a>
            </div>
          </div>
        </div>
        <article
          className='grid gap-5 rounded-lg bg-sky-800/50 p-3 pt-4 shadow-xl
                sm:p-5 sm:pt-5'>
          <h1 className='text-center font-sans text-3xl text-gray-100 sm:text-left sm:text-4xl'>
            Hola! Soy Valentin Rey 👑
          </h1>
          <p className='text-xl text-gray-200'>
            Desarrollador front-end desde hace dos años. Siempre fui un apasionado por la tecnología
            y el diseño, eso me llevo a estudiar un año la carrera de diseño gráfico hasta que
            decidí dedicarme a la programación.Ahora complemento mis conocimientos en programacion
            con lo aprendido en diseño para crear apps y paginas webs.
          </p>
          <ul className='list-inside list-disc space-y-3'>
            <li className='list-item text-lg text-gray-200'>
              Poseo conocimientos en React, Tailwind, Javascript, CSS y HTML. Manejo de rutas con
              Wouter, y conceptos de Diseño como morfologías, figura fondo y valor de línea entre
              otros. Puedo convertir diseños y maquetas en código funcional, identificar y
              solucionar errores.
            </li>
            <li className='list-item text-lg text-gray-200'>
              Soy atento, paciente y sociable. De comunicación clara y efectiva, me gusta debatir
              para crear ideas nuevas y puedo adaptarme según las necesidades del proyecto a
              realizar
            </li>
          </ul>
          <div className='mx-auto flex gap-5 sm:ml-auto sm:mr-0'>
            <a
              href={cv}
              download
              className='flex place-items-center rounded-md bg-[#9F3F4D]/80 px-4 text-center text-xl text-gray-200 hover:cursor-pointer hover:bg-gray-300 hover:text-black'>
              Download CV
            </a>
            <a
              href='#contact'
              className='place-items-center rounded-md border-2 border-solid px-4 py-1 text-center text-xl text-gray-200 hover:border-transparent hover:bg-[#9F3F4D] hover:text-white hover:opacity-75'>
              Contactame
            </a>
          </div>
        </article>
      </section>
      <SectionProyect />
      <SectionContact />
      <Footer />
    </>
  )
}
