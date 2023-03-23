import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CardPokemon } from '../components/CardPokemon';
import { PokemonContext } from '../context/PokemonContext';

export const SearchPage = () => {
	const location = useLocation();

	const { globalPokemons } = useContext(PokemonContext);

	const filteredPokemons = globalPokemons.filter(pokemon =>
		pokemon.name.includes(location.state.toLowerCase())
	);

	return (
		<div className='container'>
			<div className='card-list-pokemon container solo-pokemon'>
				{filteredPokemons.map(pokemon => (
					<CardPokemon pokemon={pokemon} key={pokemon.id} />
				))}
			</div>
		</div>
	);
};