import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import reactimg from "../../assets/react.svg"
import tailwind from "../../assets/tail.webp"
import maximize from "../../assets/maximize.png"
const PAGE_MELI = 'https://valenrey11.github.io/ML-copia/'
const PAGE_CHRISTMAS = 'https://christmas-gifts-xi.vercel.app/'
const PAGE_ROCK_PAPER_SCISSORS = 'https://valenrey11.github.io/desafio-final-dwf-5/'
import './index.css'
export function ProyectCard({ proyectName, proyectImg }) {
    let linkToProyect
    if (proyectName === 'Copia Mercado Libre') {
        linkToProyect = PAGE_MELI
    } else if (proyectName === 'Rock Paper Scissors') {
        linkToProyect = PAGE_ROCK_PAPER_SCISSORS

    } else if (proyectName === 'Christmas Gifts') {
        linkToProyect = PAGE_CHRISTMAS

    } else { linkToProyect = '' }

    const proyectIcons = <div className=".cosita flex flex-wrap gap-1 justify-between w-full py-1 items-center">
        <img src={html} alt="html" className="w-7" />
        <img src={css} alt="css" className="w-7" />
        <img src={js} alt="javascript" className="w-7 rounded" />
        <img src={reactimg} alt="react" className="cosita w-7 rounded" />
        <img src={tailwind} alt="tailwind" className="cosita w-7 rounded" />
    </div>
    return (<li className="proyecto flex flex-col text-left shadow-md border-solid border-gray-500 rounded-md w-full">
        <img src={proyectImg} alt="" className="w-full overflow-auto rounded-tl-md rounded-tr-md" />

        <div className="info-container bg-gray-200 rounded-br-md rounded-bl-md info-cont p-3 pt-0 flex flex-col gap-2 w-full">
            <h5 className="text-xl w-full mt-2 ">{proyectName}</h5>

            <div className="overlay flex gap-5 w-full rounded-br-md rounded-bl-md items-center">
                <a href={linkToProyect} target="_blank" className="w-1/2 p-1 text-center text-md text-white justify-center items-baseline
                hover:rounded-md flex hover:text-gray-900 border-b-2 border-gray-200 hover:bg-gray-200">
                    Link <img src={maximize} alt="maximize" className="w-4 h-4 ml-3" />
                </a>
                {proyectName === 'Christmas Gifts' ? proyectIcons : (proyectName === 'Copia Mercado Libre' ? proyectIcons.props.children.slice(0, -1) : proyectIcons.props.children.slice(0, -2))}
            </div>
        </div>
    </li >)
}