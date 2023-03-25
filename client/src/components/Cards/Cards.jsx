import Card from '../Card/Card';
import style from './Cards.module.css';
import { useState} from 'react';

export default function Cards(props) {
   const [currentPage, setCurrentPage] = useState(1);
   const { pokemons } = props
   const handlePreviousPage = () => {
      setCurrentPage(currentPage - 1);
   };
   const handleNextPage = () => {
      setCurrentPage(currentPage + 1);
   };
   const pageSize = 10;
   const startIndex = (currentPage - 1) * pageSize;
   const endIndex = startIndex + pageSize;
   return (
      <div className={style.DivCards}>
         {pokemons && pokemons.slice(startIndex, endIndex).map(ele => (
            <Card
               name={ele.name}
               id={ele.id}
               vida={ele.vida}
               ataque={ele.ataque}
               defensa={ele.defensa}
               velocidad={ele.velocidad}
               altura={ele.velocidad}
               peso={ele.peso}
               image={ele.image}
               tipo1={ele.tipo1}
               tipo2={ele.tipo2}
               key={ele.id}
            />
         ))}
         <div>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
               Anterior
            </button>
            <button
               onClick={handleNextPage}
            // disabled={endIndex >= characters.length}
            >
               Siguiente
            </button>
         </div>
      </div>
   );
}



