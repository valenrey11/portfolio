import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import reactimg from '../../assets/react.svg'
import git from '../../assets/gitLogo.png'
import github from '../../assets/Github.png'
import tailwind from '../../assets/tail.webp'
import { Skill } from '../skill'

export function SectionContact() {
  const form = useRef()
  const HandleClick = () => {
    const name = document.querySelector('.input-name')
    const allInputFields = document.querySelectorAll('.input-contact')
    alert(`Gracias ${name.value} por contactarte conmigo!`)
    for (let i = 0; i < allInputFields.length; i++) {
      const inp = allInputFields[i]
      inp.value = ''
    }
  }
  const sendEmail = (e) => {
    e.preventDefault()
    const allInputValues = e.target.querySelectorAll('.input-contact')
    const enviarEmail = () => {
      emailjs
        .sendForm(
          'service_zpccolx',
          'template_fwtlh5v',
          form.current,
          'xA7EGf8znRZTsLlXo'
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )
    }
    const condition =
      allInputValues[0].value === '' ||
      allInputValues[1].value === '' ||
      allInputValues[2].value === ''
    if (condition) {
      return alert('falta completar el formulario')
    } else {
      enviarEmail()
      HandleClick()
    }
  }

  return (
    <section
      id='contact'
      className='flex w-full flex-col items-center px-3
                sm:justify-evenly sm:py-20 sm:px-10 sm:pt-10'>
      <h3
        className='rounded-3xl bg-gray-100/50 py-3 px-5 font-sans text-4xl font-bold text-black  underline-offset-8 shadow-xl
                sm:px-10 sm:text-6xl '>
        Contacto
      </h3>
      <div className='mt-5 flex flex-col gap-5 sm:flex-row'>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='flex w-full flex-col gap-5 rounded-md bg-[#9F3F4D] px-5 py-7 shadow-lg sm:max-w-2xl sm:flex-row
            sm:gap-20 sm:px-10 sm:py-5'>
          <p className='text-2xl font-semibold text-white sm:hidden'>
            Podes contactarte por este medio
          </p>

          <div className='flex w-full flex-col gap-6 rounded-md'>
            <fieldset className='flex w-full flex-col justify-between text-sm'>
              <input
                type='text'
                name='user_name'
                placeholder='Name'
                autocomplete='name'
                className='input-contact input-name h-10 w-full rounded-md p-2 focus:outline-none'
              />
            </fieldset>
            <fieldset className='flex w-full items-center justify-between rounded-md'>
              <input
                type='email'
                name='user_email'
                placeholder='Email'
                autocomplete='email'
                className='input-contact h-10 w-full rounded-md p-2 focus:outline-none'
              />
            </fieldset>
            <fieldset className='flex h-full w-full items-center justify-between rounded-md'>
              <textarea
                name='message'
                placeholder='Deja tu mensaje'
                className='input-contact h-full w-full resize-none rounded-md p-2 focus:outline-none'
              />
            </fieldset>
          </div>
          <div
            className='flex flex-col justify-between gap-5
            sm:gap-0'>
            <p className='hidden text-2xl font-semibold text-white sm:inline'>
              Podes contactarte por este medio
            </p>
            <button className='btn-enviar w-full rounded-md bg-sky-800/60 p-2 text-xl text-black hover:text-white '>
              Enviar email
            </button>
          </div>
        </form>
        <article
          className='rounded-lg bg-[#9F3F4D]/60 px-1 pb-5
                 sm:flex sm:flex-col sm:px-10 sm:py-5'>
          <h5 className='font-smedium my-3 text-center text-2xl'>Skills</h5>
          <div
            className='grid grid-cols-4 gap-5
            sm:grid-cols-3 sm:gap-5'>
            {Skill()}
          </div>
        </article>
      </div>
    </section>
  )
}
