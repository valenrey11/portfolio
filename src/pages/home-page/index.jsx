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
const colorPredefinido = 'bg-[#9F3F4D]'

// bg-gray-200
export function HomePage() {
    return (
        <>
            <section id="home" className="flex w-full gap-20 px-40 py-10">
                <div className="firts-part-container w-full grid">
                    <img src={valen} alt="valen" className="drop-shadow-2xl rounded-full bg-[#9F3F4D]/80" />
                    <article className="w-full rounded-md h-full flex flex-col justify-between">
                        <h5 className="text-center text-2xl font-smedium my-3">Skills</h5>
                        <div className="img-container flex justify-evenly">
                            <img src={html} alt="html" className="w-10" />
                            <img src={css} alt="html" className="w-10 " />
                            <img src={js} alt="html" className="w-10  rounded" />
                            <img src={reactimg} alt="html" className="w-10 h-10 rounded" />
                        </div>
                    </article>
                </div>
                <article className="grid gap-5 rounded-lg shadow-xl bg-sky-800/50 p-5">
                    <h1 className="text-4xl text-gray-100 font-sans">Hola! Soy Valentin Rey</h1>
                    <p className="text-xl text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste, earum soluta dicta, blanditiis eius doloribus libero pariatur dolores quidem at reprehenderit dignissimos aliquam culpa facere totam quas fugit quod?</p>
                    <p className="text-xl text-gray-200">Lorem ipsum dolor es quidem at reprehenderit dignissimos aliquam culpa facere totam quas fugit quod?</p>
                    {/* <div className="hover:opacity-75 text-xl w-40 text-center rounded-md py-1 text-gray-200 border-solid border-2 hover:border-transparent hover:bg-[#9F3F4D] hover:text-white self-end ml-auto mr-1">More info</div> */}
                    <div className='flex gap-2 justify-end'>
                        <a href="https://github.com/valenrey11" target='_blank'>
                            <img src={github} alt="github" className='github w-8 ml-5 hover:bg-[#9F3F4D]/80 hover:scale-125 rounded-full hover:ease-in duration-200' />
                        </a>
                        <a href="https://www.linkedin.com/in/valentin-uriel-rey-703219228/" target='_blank'>
                            <img src={linkedin} alt="linkedin" className='github w-8 ml-5 hover:bg-[#9F3F4D]/80 hover:scale-125 rounded hover:ease-in duration-200' />
                        </a>
                        <a href="https://www.instagram.com/valenrey11/" target='_blank'>
                            <img src={instagram} alt="instagram" className='github w-8 ml-5 hover:bg-[#9F3F4D]/80 hover:scale-125 rounded-lg hover:ease-in duration-200' />
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