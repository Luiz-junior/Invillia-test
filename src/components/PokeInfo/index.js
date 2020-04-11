import React from 'react';

import './styles.scss';

function PokeInfo({ info }) {
  return (
    <section className="section-info">
      <div className="details-info">
        <strong> Height: <span> {info[0].height} </span> </strong> <br /><br />
        <strong> Weight: <span> {info[0].weight} </span> </strong> <br /><br />
        <strong>
          Abilities: {info[0].abilities.map((a, i) => <span key={i}> {a.ability.name} </span>)}
        </strong> <br /><br />
        <strong>
          Forms: {info[0].forms.map((f, i) => <span key={i}> {f.name} </span>)}
        </strong> <br /><br />
      </div>
    </section>
  )
}

export default PokeInfo;