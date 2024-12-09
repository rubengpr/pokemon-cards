import './App.css';
import { useState, useEffect } from 'react';
import { PokemonCard } from './assets/components/PokemonCard/PokemonCard';

const id = Math.floor(Math.random() * 100);
const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;

function App() {
  const [pokemon, setPokemon] = useState('');
  const [type, setType] = useState('');
  const [pokemonWeight, setPokemonWeight] = useState('');
  const [pokemonHeight, setPokemonHeight] = useState('');
  const [habitat, setHabitat] = useState('');
  const [pokemonImage, setPokemonImage] = useState('');
  const [hp, setHp] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`An error has occurred while fetching Pokémon data. Status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        setPokemon(result.name);
        setType(result.types[0].type.name);
        setPokemonImage(result.sprites.other.dream_world.front_default)
        setPokemonWeight(result.weight);
        setPokemonHeight(result.height);
        setHp(result.stats[0].base_stat);

        const speciesResponse = await fetch(result.species.url);
        if (!response.ok) {
          throw new Error(`An error has occurred while fetching species data. Status ${speciesResponse.status}`)
        }
        const speciesResult = await speciesResponse.json();
        setHabitat(speciesResult.habitat.name)
        console.log(speciesResult)
        
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Early return for loading and error states
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <PokemonCard
    id={id}
    pokemon={pokemon}
    type={type}
    pokemonWeight={pokemonWeight}
    pokemonHeight={pokemonHeight}
    pokemonImage={pokemonImage}
    habitat={habitat}
    hp={hp}
    />
  );
}

export default App;
