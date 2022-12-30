import { ProyectCard } from "../proyect-card";
import mercadoLibre from "../../assets/ML-thumbnail.jpg"
import rockPaper from "../../assets/rockPaper.jpg"

export function SectionProyect() {
    return (<section id="proyectos" className="h-2/3 py-10 w-full px-10 ">
        <article className=' text-center flex flex-col items-center w-full'>
            <h3 className="text-6xl text-black font-sans font-bold underline-offset-8 py-5">Proyectos</h3>
            <ul className="flex mt-8 gap-20 w-full">
                <ProyectCard proyectName='Copia Mercado Libre' proyectImg={mercadoLibre} />
                <ProyectCard proyectName='Rock Paper Scissors' proyectImg={rockPaper} />
                <ProyectCard proyectName='Copia Mercado Libre' proyectImg={mercadoLibre} />
            </ul>
        </article>
    </section>)
}