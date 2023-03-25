import style from "./Home.module.css"

export default function Home(props){
    return(
        <div className={style.fondo}>
            <button onClick={props.entrar} className={style.btn}>
                Entrar
            </button>
            <img src="../../img/pokeball.gif"/>
        </div>
    )
}