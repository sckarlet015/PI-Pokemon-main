import { NavLink } from "react-router-dom"
import style from "./Card.module.css"

export default function Card(props) {
  return (
    <div className={style.card}>
      <img src={props.image} alt="Pokemon" />
      <div className={style.info}>
        <NavLink
        to={`/detail/${props.id}`}>
          <h2 className={style.name}>#{props.id} {props.name}</h2>
        </NavLink>
        {/* <p className={style.id}>ID: {props.id}</p> */}
        {/* <p className={style.stat}>Vida: {props.vida}</p>
        <p className={style.stat}>Ataque: {props.ataque}</p>
        <p className={style.stat}>Defensa: {props.defensa}</p>
        <p className={style.stat}>Velocidad: {props.velocidad}</p>
        <p className={style.stat}>Altura: {props.altura} m</p> */}
        {/* <p className={style.stat}>Peso: {props.peso} kg</p> */}
      </div>
      <div className={style.type}>
        <span className={style.grass}>{props.tipo1}</span>
        <span className={style.poison}>{props.tipo2}</span>
      </div>
    </div>
  )
}