import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';
import { setOffset } from '../../store/action/pokemonAction';

function Pagination() {
  const dispatch = useDispatch();

  const { offset } = useSelector(state => ({
    offset: state.pokemonReducer.offset
  }));

  useEffect(() => {
    if (offset === 0) {
      document.getElementById('btn-prev').disabled = true;
      document.getElementById('btn-prev').style.color = '#999';
    } else {
      document.getElementById('btn-prev').disabled = false;
      document.getElementById('btn-prev').style.color = '#333';
    }

  }, [offset]);

  const onChangePage = (newOffSet) => dispatch(setOffset(newOffSet));

  return (
    <div className="container-pagination">
      <div className="pagination">
        <button onClick={() => onChangePage(offset - 8)} className="btn-prev" id="btn-prev">❮</button>
        <button onClick={() => onChangePage(offset + 8)} className="btn-next">❯</button>
      </div>
    </div>
  )
}

export default Pagination;
