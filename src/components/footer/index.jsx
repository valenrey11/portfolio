import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import github from '../../assets/Github.png'
import whatsapp from '../../assets/whatsapp.png'
// bg-[#9F3F4D]
export function Footer() {
    return (<footer className="h-40 flex justify-between px-10 pb-10  bg-gray00">
        <div className="">
            <p className="text-sm text-gray-300">Contacto</p>
            <p className="text-md text-black hover:text-white">valentinreyuriel@gmail.com</p>
            <a href="https://api.whatsapp.com/send?phone=541164013031&text=Hola%20valentin" target='_blank' className='flex items-center'>
                <img src={whatsapp} alt="whatsapp" className='w-5 h-5 mr-1' />
                <p className="text-md text-black hover:text-white">+541164013031</p>
            </a>
        </div>

        <div className="">
            <h5 className="text-sm text-gray-300">Redes</h5>
            <div className='flex flex-col gap-2'>
                <a href='https://www.linkedin.com/in/valentin-uriel-rey-703219228/' target='_blank' className="text-md block text-black hover:text-white flex justify-between">Linkedin
                    <img src={linkedin} alt="in" className='w-6 ml-5' />
                </a>

                <a href='https://www.instagram.com/valenrey11/' target='_blank' className="text-md text-black flex justify-between hover:text-white">Instagram
                    <img src={instagram} alt="in" className='w-6 ml-5' />
                </a>

                <a href='https://github.com/valenrey11' target='_blank' className="text-md  text-black flex justify-between hover:text-white">Github
                    <img src={github} alt="in" className='w-6 ml-5' />
                </a>
            </div>




        </div>


    </footer>

    )
}


