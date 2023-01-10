import logo from '../../assets/logo.png'
import './index.css'

export function Header() {

    const changeButton = (e) => {
        const buttonEl = e.currentTarget
        buttonEl.classList.toggle('changed')
        const navEl = document.querySelector('.menu-options')
        navEl.classList.toggle('change-display')
        console.log(navEl.classList);

    }

    return (<>
        <header className='p-2 px-3 pr-4 header top-0 flex justify-between w-full bg-[#9F3F4D]/90
        sticky z-10 sm:top-0 sm:w-full sm:p-2 sm:px-40 sm:bg-[#9F3F4D]/90 sm:z-[100]'>

            <h3 className="text-2xl font-normal text-black">Developer</h3>
            <div onClick={changeButton} id='menu-button'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {/* <div id='menu-options-container'> */}
            <nav className='menu-options'>
                <a href="#home" onClick={changeButton} className='nav-item'>
                    <p id='header-home' className="text-xl mx-auto text-white font-normal cursor-default opacity-75 py-1 px-3 rounded-lg hover:bg-[#9F3F4D] hover:text-gray-200">Home</p>
                </a>
                <a href="#proyectos" onClick={changeButton} className='nav-item'>
                    <p id='header-proy' className="text-xl mx-auto text-white font-normal cursor-default opacity-75 py-1 px-3 rounded-lg hover:bg-[#9F3F4D] hover:text-gray-200">Proyectos</p>
                </a>
                <a href="#contact" onClick={changeButton} className='nav-item'>
                    <p id='header-contact' className="text-xl text-white font-normal cursor-default opacity-75 py-1 px-3 rounded-lg hover:bg-[#9F3F4D] hover:text-gray-200">Contacto</p>
                </a>
            </nav>
            {/* </div> */}

            <nav className='hidden sm:flex sm:gap-2 bg-gray-200'>
                <div className='flex text-center w-full'>
                    <a href="#home" className='nav-item'>
                        <p id='header-home' className="text-xl mr-5 text-gray-900 font-normal cursor-default opacity-75 py-1 px-3 rounded-lg hover:bg-[#9F3F4D] hover:text-gray-200">Home</p>
                    </a>
                    <a href="#proyectos" className='nav-item'>
                        <p id='header-proy' className="text-xl mr-5 text-gray-900 font-normal cursor-default opacity-75 py-1 px-3 rounded-lg hover:bg-[#9F3F4D] hover:text-gray-200">Proyectos</p>
                    </a>
                    <a href="#contact" className='nav-item'>
                        <p id='header-contact' className="text-xl text-gray-900 font-normal cursor-default opacity-75 py-1 px-3 rounded-lg hover:bg-[#9F3F4D] hover:text-gray-200">Contacto</p>
                    </a>
                </div>
            </nav>
        </header>
    </>
    )
}