import './App.css';
import { useState, useEffect } from 'react';
import { PokemonCard } from './assets/components/PokemonCard/PokemonCard';
import { Button } from './assets/components/Button/Button'
import { Navbar } from './assets/components/Nav/Navbar';
import { NavbarLite } from './assets/components/NavbarLite/Navbarlite';
import { NavButton } from './assets/components/NavButton/NavButton';

function App() {

  return (
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
  );
}

export default App;
