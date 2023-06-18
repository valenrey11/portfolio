import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import github from '../../assets/Github.png'
import whatsapp from '../../assets/whatsapp.png'
// bg-[#9F3F4D]
export function Footer() {
  return (
    <>
      <footer className='bg-gray00 mt-8 hidden h-40 justify-between px-10 pb-10  sm:flex'>
        <div className=''>
          <p className='text-sm text-gray-300'>Contacto</p>
          <p className='text-md text-black'>valentinreyuriel@gmail.com</p>
          <a
            href='https://api.whatsapp.com/send?phone=541164013031&text=Hola%20valentin'
            target='_blank'
            className='flex items-center'>
            <img src={whatsapp} alt='whatsapp' className='mr-1 h-5 w-5' />
            <p className='text-md text-black hover:text-white'>+541164013031</p>
          </a>
        </div>

        <div className=''>
          <h5 className='text-sm text-gray-300'>Redes</h5>
          <div className='flex flex-col gap-2'>
            <a
              href='https://www.linkedin.com/in/valentin-uriel-rey-703219228/'
              target='_blank'
              className='text-md flex justify-between text-black hover:text-white'>
              Linkedin
              <img src={linkedin} alt='in' className='ml-5 w-6' />
            </a>
            <a
              href='https://github.com/valenrey11'
              target='_blank'
              className='text-md  flex justify-between text-black hover:text-white'>
              Github
              <img src={github} alt='in' className='ml-5 w-6' />
            </a>
          </div>
        </div>
      </footer>
      <footer className='mt-7 flex w-full flex-col items-center sm:hidden'>
        <div className='flex w-full justify-evenly'>
          <a
            href='https://api.whatsapp.com/send?phone=541164013031&text=Hola%20valentin'
            target='_blank'
            className='flex items-center'>
            <img src={whatsapp} alt='whatsapp' className='w-10 ' />
          </a>
          <a
            href='https://www.linkedin.com/in/valentin-uriel-rey-703219228/'
            target='_blank'
            className='text-md flex justify-between text-black hover:text-white'>
            <img src={linkedin} alt='in' className='w-10 ' />
          </a>
          <a
            href='https://github.com/valenrey11'
            target='_blank'
            className='text-md  flex justify-between text-black hover:text-white'>
            <img src={github} alt='in' className='w-10 ' />
          </a>
        </div>
        <p className='my-5 text-lg text-black hover:text-white'>valentinreyuriel@gmail.com</p>
      </footer>
    </>
  )
}
