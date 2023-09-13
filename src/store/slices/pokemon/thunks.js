import { axiosInstance } from "../../../core/axios-config";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";


export const getPokemon = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons);
    const {data} = await axiosInstance.get(`pokemon?limit=10&offset=${page * 10}`);
    dispatch(setPokemons({pokemons: data.results, nextPage: page + 1}));
  }
}