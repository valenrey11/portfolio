import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.css'

// bg-gray-300
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
    return (<section id='contact' className='px-10 py-20 w-full flex flex-col justify-center items-center'>
        <form ref={form} onSubmit={sendEmail} className='bg-[#9F3F4D] px-10 py-5 flex gap-20 rounded-md shadow-lg' >
            <div className='  w-full flex flex-col gap-6 rounded-md'>
                <fieldset className='w-full flex flex-col text-sm justify-between'>
                    {/* <label className='absolute p-2 bg-white'>Name</label> */}
                    <input type="text" name="user_name" placeholder='Name' className='input-contact w-full p-2 rounded-md h-10 focus:outline-none' />
                </fieldset>
                <fieldset className='w-full rounded-md flex items-center justify-between'>
                    {/* <label>Email</label> */}
                    <input type="email" name="user_email" placeholder='Email' className='input-contact w-full p-2 rounded-md h-10 focus:outline-none' />
                </fieldset>
                <fieldset className='w-full rounded-md flex items-center justify-between'>
                    {/* <label>Message</label> */}
                    <textarea name="message" placeholder='Deja tu mensaje' className='input-contact w-full p-2 rounded-md h-20 resize-none focus:outline-none' />
                </fieldset>
            </div>
            <div className='flex flex-col justify-between '>
                <p className='text-2xl font-semibold text-white'>Podes contactarte por este medio</p>
                <button className='btn-enviar bg-sky-800/60 p-2 w-full text-black hover:text-white text-xl rounded-md '>Enviar email</button>
                {/* hover:bg-gray-200 hover:text-black */}
            </div>
        </form>
    </section>)

}