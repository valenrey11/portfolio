import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import reactimg from '../../assets/react.svg'
import tailwind from '../../assets/tail.webp'
import maximize from '../../assets/maximize.png'
import github from '../../assets/github.png'
import mercadoLibre from '../../assets/ML-thumbnail.jpg'
import rockPaper from '../../assets/rockPaper.jpg'
import christmas from '../../assets/christmas.jpg'
import './index.css'
const proyectos = [
  {
    name: 'Copia Mercado Libre',
    live: 'https://valenrey11.github.io/ML-copia/',
    repo: 'https://github.com/valenrey11/ML-copia',
    img: mercadoLibre,
    tecnologias: [
      { tec: html, alt: 'html' },
      { tec: css, alt: 'css' },
      { tec: js, alt: 'javascript' }
    ]
  },
  {
    name: 'Rock Paper Scissors',
    live: 'https://valenrey11.github.io/desafio-final-dwf-5/',
    repo: 'https://github.com/valenrey11/desafio-final-dwf-5',
    img: rockPaper,
    tecnologias: [
      { tec: html, alt: 'html' },
      { tec: css, alt: 'css' },
      { tec: js, alt: 'javascript' }
    ]
  },
  {
    name: 'Christmas Gifts',
    live: 'https://christmas-gifts-xi.vercel.app/',
    repo: 'https://github.com/valenrey11/Christmas-Gifts',
    img: christmas,
    tecnologias: [
      { tec: html, alt: 'html' },
      { tec: css, alt: 'css' },
      { tec: js, alt: 'javascript' },
      { tec: reactimg, alt: 'react' },
      { tec: tailwind, alt: 'tailwind' }
    ]
  }
]
export function ProyectCard({ proyectName }) {
  const actualProyect = proyectos.find((x) => x.name === proyectName)

  const proyectIcons = (
    <div className='.cosita flex w-full flex-wrap items-center justify-between gap-1 py-1'>
      {actualProyect.tecnologias.map((tec) => {
        const toBeRounded = ['javascript', 'react', 'tailwind']
        const cssClass = toBeRounded.includes(tec.alt) ? 'rounded' : ''
        console.log(cssClass)
        return <img src={tec.tec} alt={tec.alt} className={`w-7 ${cssClass}`} />
      })}
    </div>
  )
  var texto = ''
  if (proyectName === 'Copia Mercado Libre') {
    texto =
      '- Fetching de datos de productos y categorías de ML. Utilicé React, Wouter (para manejo de rutas), css, git, y github Pages para el deploy. <br /> - Me enfoqué en la persistencia de datos con useContext para el uso de un estado global y utilización de carrito de compras para agregar productos. Separando todo en componentes para obtener un código limpio y fácil de analizar'
  } else if (proyectName === 'Rock Paper Scissors') {
    texto =
      '- SPA con separación en pagues con componentes usando solo html, css y javascript. Creando un router y un estado solo con Javascript para aprender las bases y funcionamiento del state y router.<br />- Separación en pages con componentes js, actualización de state y enrutado'
  } else {
    texto =
      '- Web app, lista de regalos de navidad. Posibilidad de agregar destinatario, nombre del producto, cantidades, imágenes y precios para cada uno. Manejo de estado (cambio de datos o agregar uno nuevo) <br /> - Mayor desafío: La creación de modals (de estilo pop up), que mantengan los datos en caso de querer editarlos y el agregado de accesibilidad para manejo con el teclado'
  }
  return (
    <li className='proyecto flex w-full flex-col rounded-md border-solid border-gray-500 text-left shadow-md'>
      <div className='relative'>
        <div className='despligue-descripcion rounded-tl-md rounded-tr-md'>
          <div className='h-full bg-gray-100/90 p-3'>
            <p dangerouslySetInnerHTML={{ __html: texto }}></p>
          </div>
        </div>
        <img
          src={actualProyect.img}
          alt=''
          className='w-full overflow-auto rounded-tl-md rounded-tr-md'
        />
      </div>

      <div className='info-container info-cont flex w-full flex-col gap-2 rounded-br-md rounded-bl-md bg-gray-200 p-3 pt-0'>
        <h5 className='mt-2 w-full text-xl '>{proyectName}</h5>

        <div className='overlay flex w-full items-center gap-5 rounded-br-md rounded-bl-md'>
          <a
            href={actualProyect.live}
            target='_blank'
            className='text-md flex w-1/2 items-baseline justify-center border-b-2 border-gray-200
                p-1 text-center text-white hover:rounded-md hover:bg-gray-200 hover:text-gray-900'>
            Preview <img src={maximize} alt='maximize' className='ml-3 h-4 w-4' />
          </a>
          <a
            href={actualProyect.repo}
            target='_blank'
            className='text-md flex w-1/2 items-baseline justify-center border-b-2 border-gray-200
                p-1 text-center text-white hover:rounded-md hover:bg-gray-200 hover:text-gray-900'>
            Repo <img src={github} alt='repo' className='ml-3 h-4 w-4' />
          </a>
          {proyectIcons}
        </div>
      </div>
    </li>
  )
}
