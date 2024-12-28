import './CardsPage.css';
import { useState, useEffect } from 'react';
import {  Navbar } from '../Nav/Navbar';
import { NavbarLite } from '../NavbarLite/Navbarlite';
import { NavButton } from '../NavButton/NavButton';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { Button } from '../Button/Button';
import { PropTypes } from 'prop-types';

export function CardsPage() {
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
            return prevArray; // If newId already exists, return the current array
          });
      
          const sortedArray = idArray.sort()
          console.log(sortedArray)
      
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
      
        // Early return for loading and error states
        if (isLoading) {
          return <p>Loading...</p>;
        }
      
        if (error) {
          return <p>Error: {error}</p>;
        }
    
    return(
        <div className='content'>
            <Navbar
            countCards={countCards}
            navIsHidden={navIsHidden}
            />
            <NavbarLite
            navLiteIsHidden={navLiteIsHidden}
            />
            <NavButton
            swapNavbar={swapNavbar}
            navIsHidden={navIsHidden}/>
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
            countCards={countCards}
            />
            </div>
        </div>
    )
}

CardsPage.propTypes = {
    countCards: PropTypes.number,
    navIsHidden: PropTypes.bool,
    navLiteIsHidden: PropTypes.bool,
    handleClick: PropTypes.func,
    id: PropTypes.number,
    pokemon: PropTypes.string,
    type: PropTypes.string,
    pokemonWeight: PropTypes.number,
    pokemonHeight: PropTypes.number,
    pokemonImage: PropTypes.string,
    hp: PropTypes.number,
    swapNavbar: PropTypes.func,
    textEntry: PropTypes.string,
}