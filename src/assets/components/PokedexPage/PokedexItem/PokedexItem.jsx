import './PokedexItem.css';

export function PokedexItem() {
    return(
        <div className='pokedex-item'>
            <img className='pokedex-pokemon-img' src="./public/icon-fire.png" alt="A pokémon illustration" />
            <div className='pokedex-item-info'>
                <p className='pokedex-pokemon-name'>Pokémon</p>
                <img className='pokedex-pokemon-type' src="./public/icon-fire.png" alt="A Pokémon type icon" />
            </div>
        </div>
    )
}