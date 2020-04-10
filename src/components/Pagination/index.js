import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';
import { setOffset } from '../../store/action/pokemonAction';

function Pagination() {
  const dispatch = useDispatch();

  const { offset } = useSelector(state => ({
    offset: state.pokemonReducer.offset
  }));

  const onPrevPage = (newOffSet) => dispatch(setOffset(newOffSet - 10));
  const onNextPage = (newOffSet) => dispatch(setOffset(newOffSet + 10));

  return (
    <div className="container-pagination">
      <div className="pagination">
        <button onClick={() => onPrevPage(offset)} className="btn-prev">❮</button>
        <button onClick={() => onNextPage(offset)} className="btn-next">❯</button>
      </div>
    </div>
  )
}

export default Pagination;
