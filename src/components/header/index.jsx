import logo from '../../assets/logo.png'
// bg-gray-100
// border-solid border-b-2 border-gray-200
export function Header() {
    return (
        <header className='header flex justify-between sticky top-0 w-full p-2 px-40 bg-gray-200 z-[100]'>
            <h3 className="text-2xl font-normal text-gray-800">Developer</h3>
            <nav className='flex gap-2'>
                <a href="#home">
                    <p className="text-xl text-gray-900 font-normal cursor-default opacity-75 py-1 px-3 rounded-lg hover:bg-[#9F3F4D] hover:text-gray-200">Home</p>
                </a>
                <a href="#proyectos">
                    <p className="text-xl text-gray-900 font-normal cursor-default opacity-75 py-1 px-3 rounded-lg hover:bg-[#9F3F4D] hover:text-gray-200">Proyectos</p>
                </a>
                <a href="#contact">
                    <p className="text-xl text-gray-900 font-normal cursor-default opacity-75 py-1 px-3 rounded-lg hover:bg-[#9F3F4D] hover:text-gray-200">Contacto</p>
                </a>
            </nav>
        </header>
    )
}