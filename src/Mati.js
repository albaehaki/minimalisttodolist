import './App.css';
import React from 'react';
import Arrow_back from './undo_black_24dp.svg';
import Remove_black from './remove_black_24dp.svg';

  
function  Mati(props) {


  return (
    <div>
      {props.nos.map((a, i) => 
        <div className="flex justify-between px-3" key={i} value={i}>
          <div className="flex">
            <button onClick={props.balik} className="px-2" type="submit"><img src={Arrow_back} alt="Arrow_back" /></button>
            <p className="line-through">{(a.length > 15) ? a.slice(0, 15) + '...' : a }</p>
          </div>
          <div>
            <button onClick={props.hapus} className="px-2" type="submit"><img src={Remove_black} alt="Remove_black" /></button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Mati;