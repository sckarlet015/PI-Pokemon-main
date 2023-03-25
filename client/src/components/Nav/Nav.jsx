import React from "react";
import SearchBar from "../NavBar/SearchBar";
import style from "./Nav.module.css"
// import About from "../About/About";
import { NavLink } from "react-router-dom";

export default function Nav(props) {

    return (
        <div className={style.NavBar}>
            <NavLink to={"/pokemons"} className={style.link} onClick={() => props.getAllPoke()}>Pokemons</NavLink>
            <NavLink to={"/types"} className={style.link}>Tipos</NavLink>
            <NavLink to={"/Create"} className={style.link}>Crear</NavLink>
            <NavLink to={"/favorites"} className={style.link}>Favorites</NavLink>
            <NavLink to={"/acerca"} className={style.link}>Acerca de</NavLink>
            <SearchBar buscar={props.buscar}></SearchBar>
        </div>
    )
}