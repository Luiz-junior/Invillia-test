import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';
import { getPokemon, getPokemonDetails, getDetailsInfo } from '../../store/action/pokemonAction';
import FlipCard from '../../components/Flipcard';
import Pagination from '../../components/Pagination';

function Home() {
  const dispatch = useDispatch();

  const { pokemon, pokeDetails, pokeImageId, offset, loading } = useSelector(state => ({
    pokemon: state.pokemonReducer.pokemon,
    pokeDetails: state.pokemonReducer.pokemonDetails,
    pokeImageId: state.pokemonReducer.pokeImageId,
    offset: state.pokemonReducer.offset,
    loading: state.pokemonReducer.loading,
  }));
  
  useEffect(() => {
    dispatch(getPokemon(offset));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, offset]);

  useEffect(()=> { pokeImageId.sort((a, b) => a - b)});

  useEffect(() => {
    if (pokemon.length > 0) {
      let pokeDetails = [];
      let idImage = [];
      pokemon.map(poke => {
        dispatch(getPokemonDetails(poke.url, idImage, pokeDetails))
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon]);

  const getHability = (detail, idPoke) => {
    let pokeDetails = detail.filter(d => d.id === idPoke);
    dispatch(getDetailsInfo(pokeDetails));
  }

  const onRotateCard = (index, degValue, pokeId) => {
    getHability(pokeDetails, pokeId);
    
    document.getElementById(`flip-card-${index}`).style.transform = `rotateY(${360}deg)`;
    document.getElementById(`flip-card-inner${index}`).style.transform = `rotateY(${degValue}deg)`;

    if(pokeId)
      document.getElementById(`img-poke-${index}`).style.display = 'none';
    else 
      document.getElementById(`img-poke-${index}`).style.display = 'block';
  }

  if (loading)
    return <h4 className="loading">Carregando...</h4>;

  return (
    <div className="container list-container">
      <section className="section-list-pokemon">
        {pokemon.map((poke, i) => {
          return (
            <FlipCard
              key={i}
              poke={poke}
              pokeId={pokeImageId[i]}
              details={pokeDetails[i]}
              index={i}
              onRotateCard={onRotateCard}
            />
          )
        })}
      </section>
      <Pagination />
    </div>
  );
}

export default Home;

