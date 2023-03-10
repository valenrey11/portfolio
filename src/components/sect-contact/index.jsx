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
    const HandleClick = () => {
        const name = document.querySelector(".input-name")
        const allInputFields = document.querySelectorAll(".input-contact")
        alert(`Gracias ${name.value} por contactarte conmigo!`)
        for (let i = 0; i < allInputFields.length; i++) {
            const inp = allInputFields[i];
            inp.value = ''
        }
    }
    const sendEmail = (e) => {
        e.preventDefault();
        const allInputValues = e.target.querySelectorAll(".input-contact")
        const enviarEmail = () => {
            emailjs.sendForm('service_zpccolx', 'template_fwtlh5v', form.current, 'xA7EGf8znRZTsLlXo')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                })
        }
        const condition = allInputValues[0].value === '' || allInputValues[1].value === '' || allInputValues[2].value === ''
        if (condition) {
            return alert('falta completar el formulario')
        } else {
            enviarEmail()
            HandleClick()
        }
    }

    return (<section id='contact' className='px-3 pb-10 pt-0 w-full flex flex-col
                sm:pt-10 sm:py-20 sm:flex-row sm:px-10 sm:justify-evenly'>

        <form ref={form}
            onSubmit={sendEmail}
            className='w-full bg-[#9F3F4D] px-5 sm:px-10 py-7 sm:py-5 flex flex-col gap-5 rounded-md shadow-lg
                         sm:flex-row sm:gap-20 sm:max-w-2xl' >
            <p className='text-2xl font-semibold text-white sm:hidden'>Podes contactarte por este medio</p>

            <div className='w-full flex flex-col gap-6 rounded-md'>
                <fieldset className='w-full flex flex-col text-sm justify-between'>
                    <input type="text" name="user_name" placeholder='Name' className='input-contact input-name w-full p-2 rounded-md h-10 focus:outline-none' />
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
                <p className='text-2xl font-semibold text-white hidden sm:inline'>Podes contactarte por este medio</p>
                <button className='btn-enviar bg-sky-800/60 p-2 w-full text-black hover:text-white text-xl rounded-md '>Enviar email</button>
            </div>
        </form>
        <article className='hidden bg-[#9F3F4D]/60 px-10 py-5 rounded-lg
        sm:flex sm:flex-col'>
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