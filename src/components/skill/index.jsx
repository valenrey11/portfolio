import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import reactimg from "../../assets/react.svg"
import git from "../../assets/gitLogo.png"
import github from '../../assets/Github.png'
import tailwind from "../../assets/tail.webp"
export function Skill(){
    const SKILS = [{tec:html,name:'html'},{tec:css,name:'css'},{tec:js,name:'javascript'},
    {tec:reactimg,name:'react'},{tec:git,name:'git'},{tec:github,name:'github'},{tec:tailwind,name:'tailwind'}]
    
    const aDevolver = SKILS.map(s=> {return <div className='flex flex-col items-center'>
        <img src={s.tec} alt={s.name} className={`w-10 hover:scale-110
        ${s.name==='javascript'||s.name==='react'?'rounded':''}
        ${s.name==='git'||s.name==='github'?'drop-shadow':''}
        ${s.name==='tailwind'?'drop-shadow bg-white rounded-full':''}
        `} />
        <p className="mt-2">{s.name}</p>
    </div>
    })
    return aDevolver
}