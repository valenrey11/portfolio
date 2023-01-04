import { Footer } from "../../components/footer";
import { SectionProyect } from "../../components/sect-proyects";
import { SectionContact } from "../../components/sect-contact";
import './index.css'
import valen from '../../assets/valen.png'
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import reactimg from "../../assets/react.svg"

import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import github from '../../assets/Github.png'
import { Header } from "../../components/header";
const colorPredefinido = 'bg-[#9F3F4D]'

export function HomePage() {
    return (
        <>
            <Header />
            <section id="home" className=" w-full px-10 flex flex-col gap-4
            sm:flex-row  sm:gap-20 sm:px-40 sm:py-10">
                <div className="firts-part-container w-full grid sm:gap-10">
                    <div className="clip py-5 drop-shadow-2xl">
                        <img src={valen} alt="valen" className=" rounded-full bg-[#9F3F4D]/80" />
                    </div>
                    <article className="w-full rounded-md h-full flex justify-evenly">
                        <a href="https://github.com/valenrey11" target='_blank'>
                            <img src={github} alt="github" className='github w-8 hover:bg-[#9F3F4D]/80 hover:scale-125 rounded-full hover:ease-in duration-200' />
                        </a>
                        <a href="https://www.linkedin.com/in/valentin-uriel-rey-703219228/" target='_blank'>
                            <img src={linkedin} alt="linkedin" className='github w-8 hover:bg-[#9F3F4D]/80 hover:scale-125 rounded hover:ease-in duration-200' />
                        </a>
                        <a href="https://www.instagram.com/valenrey11/" target='_blank'>
                            <img src={instagram} alt="instagram" className='github w-8 hover:bg-[#9F3F4D]/80 hover:scale-125 rounded-lg hover:ease-in duration-200' />
                        </a>
                    </article>
                </div>
                <article className="grid gap-5 rounded-lg shadow-xl bg-sky-800/50 p-5">
                    <h1 className="text-4xl text-gray-100 font-sans">Hola! Soy Valentin Rey</h1>
                    <p className="text-xl text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste, earum soluta dicta, blanditiis eius doloribus libero pariatur dolores quidem at reprehenderit dignissimos aliquam culpa facere totam quas fugit quod?</p>
                    <p className="text-xl text-gray-200">Lorem ipsum dolor es quidem at reprehenderit dignissimos aliquam culpa facere totam quas fugit quod?</p>
                    <a href="#contact" className="hover:opacity-75 text-xl w-40 text-center rounded-md py-1 text-gray-200 border-solid border-2 hover:border-transparent hover:bg-[#9F3F4D] hover:text-white self-end ml-auto mr-1">Contactame</a>
                    {/* <a href="#contact" className="p-5 ">contactame</a> */}
                </article>
            </section>
            <SectionProyect />
            <SectionContact />
            <Footer />
        </>
    )
}