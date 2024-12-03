import './App.css';
import { useState, useEffect } from 'react';

const id = Math.floor(Math.random() * 100);
const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;

function App() {
  const [pokemon, setPokemon] = useState('');
  const [pokemonWeight, setPokemonWeight] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`An error has occurred. Status: ${response.status}`);
        }
        const result = await response.json();
        setPokemon(result.name);
        setPokemonWeight(result.weight);
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
    <div>
      <p>Pokémon name: {pokemon}</p>
      <p>Pokémon weight: {pokemonWeight}</p>
      <p>{id}</p>
    </div>
  );
}

export default App;
