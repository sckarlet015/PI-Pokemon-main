import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import './App.css';
import axios from "axios"
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllPokemon } from './redux/actions/getAllPokemon';
import Cards from './components/Cards/Cards';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import Detail from './components/detail/Detail';
import { getAllTypes } from './redux/actions/getAllTypes';
import Types from './components/Types/Types';


function App() {
  const allPokes = useSelector(state => state.allPokemons)
  const allTypes = useSelector(state => state.allTypes)
  const dispatch = useDispatch();
  // console.log(allPokes)

  const [pokemons, setPokemons] = useState([])
  const [pokeBuscado, setPokeBuscado] = useState({})
  const [types, setTypes] = useState([])
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(getAllPokemon())
      setPokemons(allPokes)
    }
    if(types.length === 0){
      dispatch(getAllTypes())
      setTypes(allTypes)
      console.log(allTypes)
    }
  }, [dispatch, allPokes, pokemons, allTypes])

  function getAllPoke(){
    dispatch(getAllPoke())
    console.log(allPokes)
  }

  function handleClick() { //Funcion del boton Entrar
    navigate("/pokemons")
  }
  async function buscar(inputValue) {
    // Validar si es solo letras
    if (/^[a-zA-Z]+$/.test(inputValue)) {
      let poke = await axios(`http://localhost:3001/pokemons/name?name=${inputValue}`)
        .then(response => response.data)
        .then(data => data[0])
      setPokeBuscado(poke)
    }
    // Validar si es solo numeros
    if (/^\d+$/.test(inputValue)) {
      let poke = await axios(`http://localhost:3001/pokemons/${inputValue}`)
        .then(response => response.data)
        .then(data => data)
        setPokeBuscado(poke)
    }
    // Si no es solo letras ni solo numeros, devolver null
    return null;
  }

  return (
    <div className="App">
      {location.pathname !== '/' && <Nav buscar={buscar} getAllPoke={getAllPoke}/>}
      <Routes>
      <Route
          path='/'
          element={<Home entrar={handleClick} />}
        />
        <Route
          path="/pokemons"
          element={<Cards pokemons={pokemons} />}
        />
        <Route
          path='/types'
          element={<Types types={types}/>}
        />
        <Route
        path='/search'
        element={<Search pokeBuscado={pokeBuscado}/>}
        />
        <Route
        path='/detail/:pokeId'
        element={<Detail/>}
        />
      </Routes>
    </div>
  );
}

export default App;

