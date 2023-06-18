import logo from '../../assets/logo.png'
import './index.css'

export function Header() {
  const changeButton = () => {
    const buttonEl = document.getElementById('menu-button')
    buttonEl.classList.toggle('changed')
    const navEl = document.querySelector('.menu-options')
    navEl.classList.toggle('change-display')
  }

  return (
    <>
      <header
        className='header sticky top-0 z-10 flex w-full justify-between bg-[#9F3F4D]/90 p-2
        px-3 pr-4 sm:top-0 sm:z-[100] sm:w-full sm:bg-gray-200 sm:p-2 sm:px-40'>
        <h3 className='text-2xl font-normal text-black'>Developer</h3>
        <div onClick={changeButton} id='menu-button'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav className='menu-options'>
          <div className='my-0 mx-auto flex flex-col gap-5 p-7 text-center'>
            <a href='#home' onClick={changeButton} className=''>
              <p
                id='header-home'
                className='mx-auto rounded-lg py-1 px-3 text-xl font-normal text-white opacity-75 hover:bg-[#9F3F4D] hover:text-gray-200'>
                Home{' '}
              </p>
            </a>
            <a href='#proyectos' onClick={changeButton}>
              <p
                id='header-proy'
                className='mx-auto rounded-lg py-1 px-3 text-xl font-normal text-white opacity-75 hover:bg-[#9F3F4D] hover:text-gray-200'>
                Proyectos
              </p>
            </a>
            <a href='#contact' onClick={changeButton}>
              <p
                id='header-contact'
                className='rounded-lg py-1 px-3 text-xl font-normal text-white opacity-75 hover:bg-[#9F3F4D] hover:text-gray-200'>
                Contacto
              </p>
            </a>
          </div>
        </nav>
        <nav className='hidden sm:flex sm:gap-2'>
          <div className='flex w-full text-center'>
            <a href='#home'>
              <p
                id='header-home'
                className='mr-5 rounded-lg py-1 px-3 text-xl font-normal text-gray-900 opacity-75 hover:bg-[#9F3F4D] hover:text-gray-200'>
                Home
              </p>
            </a>
            <a href='#proyectos'>
              <p
                id='header-proy'
                className='mr-5 rounded-lg py-1 px-3 text-xl font-normal text-gray-900 opacity-75 hover:bg-[#9F3F4D] hover:text-gray-200'>
                Proyectos
              </p>
            </a>
            <a href='#contact'>
              <p
                id='header-contact'
                className='rounded-lg py-1 px-3 text-xl font-normal text-gray-900 opacity-75 hover:bg-[#9F3F4D] hover:text-gray-200'>
                Contacto
              </p>
            </a>
          </div>
        </nav>
      </header>
    </>
  )
}
