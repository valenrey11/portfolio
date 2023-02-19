import { Header } from "../../components/header";
import { SectionProyect } from "../../components/sect-proyects";
import { SectionContact } from "../../components/sect-contact";
import { Footer } from "../../components/footer";
import './index.css'
import 'animate.css'
import valen from '../../assets/valen.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import github from '../../assets/Github.png'
import whatsapp from '../../assets/whatsapp.png'
import cv from '../../assets/CV-Valentin-Uriel-Rey.pdf'
const colorPredefinido = 'bg-[#9F3F4D]'

export function HomePage() {
    return (
        <>
            <Header />
            <section id="home" className=" w-full px-3 flex flex-col gap-4
            sm:flex-row  sm:gap-20 sm:px-40 sm:py-10">
                <div className="firts-part-container w-full grid sm:gap-10 align-middle">
                    <div className="clip py-5 w-full flex content-center">
                        <div className="img-cont h-52 w-52 my-0 mx-auto rounded-full">
                            <img src={valen} alt="valen" className="img-page rounded-full bg-[#9F3F4D]/80 drop-shadow-2xl" />
                        </div>
                        <div className="w-11 h-full flex flex-col justify-around sm:hidden">
                            <a href="https://github.com/valenrey11" target='_blank' className=" inline-flex justify-center">
                                <img src={github} alt="github" className='w-8 hover:bg-[#9F3F4D]/80 hover:scale-125 rounded-full hover:ease-in duration-200' />
                            </a>
                            <a href="https://www.linkedin.com/in/valentin-uriel-rey-703219228/" target='_blank' className=" inline-flex justify-center">
                                <img src={linkedin} alt="linkedin" className='w-8 hover:bg-[#9F3F4D]/80 hover:scale-125 rounded hover:ease-in duration-200' />
                            </a>
                            <a href="https://www.instagram.com/valenrey11/" target='_blank' className=" inline-flex justify-center">
                                <img src={instagram} alt="instagram" className='w-8 hover:bg-[#9F3F4D]/80 hover:scale-125 rounded-lg hover:ease-in duration-200' />
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=541164013031&text=Hola%20valentin" target='_blank' className=" inline-flex justify-center">
                                <img src={whatsapp} alt="whatsapp" className='w-8 ' />
                            </a>
                        </div>
                    </div>
                    <div className="hidden w-full rounded-md h-full sm:flex justify-evenly">
                        <a href="https://github.com/valenrey11" target='_blank'>
                            <img src={github} alt="github" className='github w-8 hover:bg-[#9F3F4D]/80 hover:scale-125 rounded-full hover:ease-in duration-100' />
                        </a>
                        <a href="https://www.linkedin.com/in/valentin-uriel-rey-703219228/" target='_blank'>
                            <img src={linkedin} alt="linkedin" className='github w-8 hover:bg-[#9F3F4D]/80 hover:scale-125 rounded hover:ease-in duration-100' />
                        </a>
                        <a href="https://www.instagram.com/valenrey11/" target='_blank'>
                            <img src={instagram} alt="instagram" className='github w-8 hover:bg-[#9F3F4D]/80 hover:scale-125 rounded-lg hover:ease-in duration-100' />
                        </a>
                    </div>
                </div >
                <article className="grid gap-5 rounded-lg shadow-xl bg-sky-800/50 p-3 pt-4
                sm:p-5 sm:pt-5">
                    <h1 className="text-4xl text-gray-100 font-sans">Hola! Soy Valentin Rey</h1>
                    <p className="text-xl text-gray-200">Soy un desarrollador <span className="pulsate">front-end</span> con conocimientos en HTML, CSS, JavaScript, React y Tailwind. Me caracterizo por ser una persona muy <span className="pulsate">sociable</span> y con una gran capacidad resolutiva, lo que me permite trabajar en equipo de manera efectiva y aportar mis conocimientos a un grupo de trabajo.</p>
                    <p className="text-xl text-gray-200"> Estoy siempre dispuesto a aprender nuevas <span className="pulsate">tecnologías</span> y encontrar soluciones a los desafíos que se me presenten.</p>
                    <div className="flex ml-auto gap-5">
                        <a href={cv} download className="flex place-items-center px-4 text-xl text-center rounded-md text-gray-200 bg-[#9F3F4D]/80 hover:text-black hover:bg-gray-300 hover:cursor-pointer">Download CV</a>
                        <a href="#contact" className="hover:opacity-75 text-xl place-items-center px-4 text-center rounded-md py-1 text-gray-200 border-solid border-2 hover:border-transparent hover:bg-[#9F3F4D] hover:text-white">Contactame</a>
                    </div>
                </article>
            </section >
            <SectionProyect />
            <SectionContact />
            <Footer />
        </>
    )
}