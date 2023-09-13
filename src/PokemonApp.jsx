import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "./store/slices/pokemon";


export const PokemonApp = () => {

  const {pokemons, isLoading, nextPage} = useSelector(state => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemon());
  }, []);

  const handleBackPage = () => {
      if (nextPage < 2) return;
      dispatch(getPokemon(nextPage - 2)); 
    } 
  

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: {isLoading ? 'true' : 'false'}</span>

      <ul>
        {
          pokemons.map(({name, url}) => (
            <li key={name}>{ name }</li>
          ))
        }
      </ul>
      <button
        disabled={isLoading}
        onClick={handleBackPage}
      >
        Back
      </button>
      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemon(nextPage))}
      >
        Next
      </button>
    </>
  )
}
