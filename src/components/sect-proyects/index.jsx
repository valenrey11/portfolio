import { ProyectCard } from "../proyect-card";

export function SectionProyect() {
    return (<section id="proyectos" className="h-2/3 py-10 w-full px-3
    sm:px-10 ">
        <article className='text-center flex flex-col items-center w-full'>
            <h3 className="text-4xl text-black font-sans font-bold underline-offset-8 py-3 bg-gray-100/50 px-5  rounded-3xl shadow-xl
                sm:text-6xl sm:px-10 sm:py-5">Proyectos</h3>
            <ul className="flex flex-col
            sm:flex-row mt-8 gap-10 w-full">
                <ProyectCard proyectName='Copia Mercado Libre' />
                <ProyectCard proyectName='Rock Paper Scissors' />
                <ProyectCard proyectName='Christmas Gifts' />
            </ul>
        </article>
    </section>)
}