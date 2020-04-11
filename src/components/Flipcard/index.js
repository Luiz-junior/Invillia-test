import React from 'react';
import { useSelector } from 'react-redux';

import './styles.scss';

function FlipCard(props) {
  const { poke, pokeId, onRotateCard, index } = props;

  const { detailsInfo, loading } = useSelector(state => ({
    detailsInfo: state.pokemonReducer.detailsInfo,
    loading: state.pokemonReducer.loading,
  }));

  function Abilities({ info }) {
    return (
      <section className="section-abilities">
        <strong>
          Habilidades: {info[0].abilities.map((a, i) => <p key={i}> {a.ability.name} </p>)}
        </strong>
      </section>
    )
  }

  function Forms({ info }) {
    return (
      <section className="section-abilities">
        <strong>
          Forms: {info[0].forms.map((f, i) => <span key={i}> {f.name} </span>)}
        </strong>
      </section>
    )
  }

  if (loading)
    return 'Carregando...';

  return (
    <div
      key={index}
      className="flip-card"
      id={`flip-card-${index}`}
      onMouseLeave={() => onRotateCard(index, 360)}
      onClick={() => onRotateCard(index, 180, pokeId)}
    >
      <div className="flip-card-inner" id={`flip-card-inner${index}`}>
        <div className="flip-card-front">
          <div className="card-header">
            <strong>{poke.name}</strong>
          </div>
          <div className="card-content">
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`} alt="" />
          </div>
        </div>

        <div className="flip-card-back">
          {detailsInfo.length ? (
            <div>
              <section className="section-sprites">
                <img src={detailsInfo[0].sprites.front_default} alt="" />
                <section className="section-back-poke"></section>
              </section>
              <Abilities info={detailsInfo} />
              <Forms info={detailsInfo} />
            </div>
          ) : 'Carregando...'}
        </div>
      </div>
    </div>
  )
}

export default FlipCard;