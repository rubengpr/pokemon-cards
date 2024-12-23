import './App.css';
import { useState, useEffect } from 'react';
import { PokemonCard } from './assets/components/PokemonCard/PokemonCard';
import { Button } from './assets/components/Button/Button'
import { Navbar } from './assets/components/Nav/navbar';

function App() {
  const [pokemon, setPokemon] = useState('');
  const [type, setType] = useState('');
  const [id, setId] = useState((Math.floor(Math.random() * 100)));
  const [pokemonWeight, setPokemonWeight] = useState('');
  const [pokemonHeight, setPokemonHeight] = useState('');
  const [pokemonImage, setPokemonImage] = useState('');
  const [hp, setHp] = useState('');
  const [textEntry, setTextEntry] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const handleClick = () => {
    setId(Math.floor(Math.random() * 100));
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
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
        setTextEntry(speciesResult.flavor_text_entries[0].flavor_text)
        console.log(speciesResult)
        
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // Early return for loading and error states
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='content'>
      <Navbar />
      <div className='body-content'>
        <PokemonCard
        id={id}
        pokemon={pokemon}
        type={type}
        pokemonWeight={pokemonWeight}
        pokemonHeight={pokemonHeight}
        pokemonImage={pokemonImage}
        hp={hp}
        textEntry={textEntry}
        />

        <Button
        handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default App;
