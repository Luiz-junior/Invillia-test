import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import './styles.scss';
import { getPokemon, getPokemonDetails, getDetailsInfo } from '../../store/action/pokemonAction';
import FlipCard from '../../components/Flipcard';

function Home() {

  const dispatch = useDispatch();
  const history = useHistory();
  let { id } = useParams();

  const { pokemon, pokeDetails, detailsInfo, pokeImageId, loading } = useSelector(state => ({
    pokemon: state.pokemonReducer.pokemon,
    pokeDetails: state.pokemonReducer.pokemonDetails,
    detailsInfo: state.pokemonReducer.detailsInfo,
    pokeImageId: state.pokemonReducer.pokeImageId,
    loading: state.pokemonReducer.loading,
  }));
  //useSelector(state => console.log('state: ', state.pokemonReducer))

  useEffect(() => {
    dispatch(getPokemon());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(()=> {pokeImageId.sort((a, b) => a - b)});

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
    let pokeDetails = detail.filter((d, i) => d.id == idPoke);
    dispatch(getDetailsInfo(pokeDetails));
  }

  const onRotateCard = (index, degValue, pokeId) => {
    getHability(pokeDetails, pokeId);

    document.getElementById(`flip-card-${index}`).style.transform = `rotateY(${360}deg)`;
    document.getElementById(`flip-card-inner${index}`).style.transform = `rotateY(${degValue}deg)`;
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
      {/* <Pagination pages={pages} /> */}
    </div>
  );
}

export default Home;

