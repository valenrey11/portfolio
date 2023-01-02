import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.css'
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import reactimg from "../../assets/react.svg"
import git from "../../assets/gitLogo.png"
import github from '../../assets/Github.png'
import tailwind from "../../assets/tail.webp"

export function SectionContact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);
        emailjs.sendForm('service_zpccolx', 'template_fwtlh5v', form.current, 'xA7EGf8znRZTsLlXo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (<section id='contact' className='px-10 py-20 w-full flex justify-between items-center'>
        <form ref={form} onSubmit={sendEmail} className='bg-[#9F3F4D] px-10 py-5 flex flex-col gap-5 rounded-md shadow-lg
        sm:flex-row sm:gap-20' >
            <div className='w-full flex flex-col gap-6 rounded-md'>
                <fieldset className='w-full flex flex-col text-sm justify-between'>
                    <input type="text" name="user_name" placeholder='Name' className='input-contact w-full p-2 rounded-md h-10 focus:outline-none' />
                </fieldset>
                <fieldset className='w-full rounded-md flex items-center justify-between'>
                    <input type="email" name="user_email" placeholder='Email' className='input-contact w-full p-2 rounded-md h-10 focus:outline-none' />
                </fieldset>
                <fieldset className='w-full rounded-md flex items-center justify-between'>
                    <textarea name="message" placeholder='Deja tu mensaje' className='input-contact w-full p-2 rounded-md h-20 resize-none focus:outline-none' />
                </fieldset>
            </div>
            <div className='flex flex-col gap-5 justify-between
            sm:gap-0'>
                <p className='text-2xl font-semibold text-white'>Podes contactarte por este medio</p>
                <button className='btn-enviar bg-sky-800/60 p-2 w-full text-black hover:text-white text-xl rounded-md '>Enviar email</button>
                {/* hover:bg-gray-200 hover:text-black */}
            </div>
        </form>
        <article className='hidden bg-[#9F3F4D]/70 px-10 py-5 rounded-tl-full rounded-br-full rounded-tr-full
        sm:flex'>
            <h5 className="text-center text-2xl font-smedium my-3">Skills</h5>
            <div className="img-container grid grid-cols-3 gap-5">
                <img src={html} alt="html" className="w-10 hover:scale-110" />
                <img src={css} alt="html" className="w-10 hover:scale-110" />
                <img src={js} alt="html" className="w-10  rounded hover:scale-110" />
                <img src={reactimg} alt="html" className="w-10 h-10 rounded hover:scale-110" />
                <img src={git} alt="html" className="w-10 drop-shadow hover:scale-110" />
                <img src={github} alt="html" className="w-10 drop-shadow hover:scale-110" />
                <img src={tailwind} alt="html" className="w-10 drop-shadow bg-white rounded-full hover:scale-110" />
            </div>
        </article>
    </section>)

}