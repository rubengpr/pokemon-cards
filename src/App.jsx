import './App.css';
import { useState, useEffect } from 'react';
import { CardsPage } from './assets/components/CardsPage/CardsPage';
import { PokedexPage } from './assets/components/PokedexPage/PokedexPage';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const [pokemon, setPokemon] = useState('');
  const [type, setType] = useState('');
  const [id, setId] = useState((Math.ceil(Math.random() * 100)));
  const [pokemonWeight, setPokemonWeight] = useState('');
  const [pokemonHeight, setPokemonHeight] = useState('');
  const [pokemonImage, setPokemonImage] = useState('');
  const [hp, setHp] = useState('');
  const [textEntry, setTextEntry] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [countCards, setCountCards] = useState(0);
  const [idArray, setIdArray] = useState([id]);
  const [navIsHidden, setNavIsHidden] = useState(false);
  const [navLiteIsHidden, setNavLiteIsHidden] = useState(true);


  function swapNavbar() {
    setNavIsHidden(!navIsHidden);
    setNavLiteIsHidden(!navLiteIsHidden);
  }
    
  const handleClick = () => {
    const newId = Math.ceil(Math.random() * 100);
    setId(newId);
  };
      
      
        useEffect(() => {
          setIdArray(prevArray => {
            if (!prevArray.includes(id)) {
              setCountCards(prevArray.length + 1);
              return [...prevArray, id];
            }
            return prevArray;
          });
      
          const fetchData = async () => {
            try {
              const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
              if (!response.ok) {
                throw new Error(`An error has occurred while fetching Pokémon data. Status: ${response.status}`);
              }
              const result = await response.json();
              setPokemon(result.name);
              setType(result.types[0].type.name);
              setPokemonImage(result.sprites.other.dream_world.front_default)
              setPokemonWeight(result.weight);
              setPokemonHeight(result.height);
              setHp(result.stats[0].base_stat);

              console.log(result);
      
              const speciesResponse = await fetch(result.species.url);
              if (!response.ok) {
                throw new Error(`An error has occurred while fetching species data. Status ${speciesResponse.status}`)
              }
              const speciesResult = await speciesResponse.json();
              setTextEntry(speciesResult.flavor_text_entries[0].flavor_text)
              
            } catch (err) {
              setError(err.message);
            } finally {
              setIsLoading(false);
            }
          };
      
          fetchData();
        }, [id, idArray]);
      
        
        if (isLoading) {
          return(
          <div className='loading-wrapper'>
            <img className='loading-img' src="./public/pokeball.png" alt="A Pokéball" />
            <p className='loading-text'>Catching Pokémons...</p>
          </div>
          );
        }
      
        if (error) {
          return <p>Error: {error}</p>;
        }
  
  

  // Render based on current route
if (location.pathname === '/cards') {
  return <CardsPage 
    pokemon={pokemon}
    type={type}
    id={id}
    pokemonWeight={pokemonWeight}
    pokemonHeight={pokemonHeight}
    pokemonImage={pokemonImage}
    hp={hp}
    textEntry={textEntry}
    handleClick={handleClick}
    countCards={countCards}
    navIsHidden={navIsHidden}
    navLiteIsHidden={navLiteIsHidden}
    swapNavbar={swapNavbar}
  />;
}

if (location.pathname === '/pokedex') {
  return <PokedexPage 
    pokemon={pokemon}
    type={type}
    id={id}
    pokemonWeight={pokemonWeight}
    pokemonHeight={pokemonHeight}
    pokemonImage={pokemonImage}
    hp={hp}
    textEntry={textEntry}
    handleClick={handleClick}
    countCards={countCards}
    navIsHidden={navIsHidden}
    navLiteIsHidden={navLiteIsHidden}
    swapNavbar={swapNavbar}
  />;
}

return null;

  
}

export default App;
