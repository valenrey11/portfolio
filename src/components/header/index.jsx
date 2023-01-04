import logo from '../../assets/logo.png'
import './index.css'

export function Header() {
    // function menuOnClick() {
    //     document.querySelector(".nav-bar").classList.toggle("change");
    //     document.querySelector(".circulo").classList.toggle("change-bg");
    //     // document.getElementById("menu-bg").classList.toggle("change-bg");
    // }
    return (<>
        <header className='p-2 pl-10 header top-0 flex justify-between w-full bg-gray-200
        sm:sticky sm:top-0 sm:w-full sm:p-2 sm:px-40 sm:bg-gray-200 sm:z-[100]
        
        '>

            <h3 className="text-2xl font-normal text-gray-800">Developer</h3>
            <div className='circulo inline bg-red-400 rounded-full w-10 h-10 sm:hidden'>
                <nav className='nav-bar sm:flex sm:gap-2 bg-gray-200'>
                    <div className='flex flex-col text-center w-full'>
                        <a href="#home" className='nav-item'>
                            <p className="text-xl text-gray-900 font-normal cursor-default opacity-75 py-1 px-3 rounded-lg hover:bg-[#9F3F4D] hover:text-gray-200">Home</p>
                        </a>
                        <a href="#proyectos" className='nav-item'>
                            <p className="text-xl text-gray-900 font-normal cursor-default opacity-75 py-1 px-3 rounded-lg hover:bg-[#9F3F4D] hover:text-gray-200">Proyectos</p>
                        </a>
                        <a href="#contact" className='nav-item'>
                            <p className="text-xl text-gray-900 font-normal cursor-default opacity-75 py-1 px-3 rounded-lg hover:bg-[#9F3F4D] hover:text-gray-200">Contacto</p>
                        </a>
                    </div>
                </nav>
            </div>
            <nav className='hidden sm:flex sm:gap-2 bg-gray-200'>
                <div className='flex text-center w-full'>
                    <a href="#home" className='nav-item'>
                        <p className="text-xl text-gray-900 font-normal cursor-default opacity-75 py-1 px-3 rounded-lg hover:bg-[#9F3F4D] hover:text-gray-200">Home</p>
                    </a>
                    <a href="#proyectos" className='nav-item'>
                        <p className="text-xl text-gray-900 font-normal cursor-default opacity-75 py-1 px-3 rounded-lg hover:bg-[#9F3F4D] hover:text-gray-200">Proyectos</p>
                    </a>
                    <a href="#contact" className='nav-item'>
                        <p className="text-xl text-gray-900 font-normal cursor-default opacity-75 py-1 px-3 rounded-lg hover:bg-[#9F3F4D] hover:text-gray-200">Contacto</p>
                    </a>
                </div>
            </nav>
        </header>
    </>
    )
}