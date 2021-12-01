import './App.css';
import React from 'react';
import Done_black from './done_black_24dp.svg';
import Delete_black from './remove_black_24dp.svg';

  

function  List(props) {


  return (
    <div className="shadow-sm pb-5 pt-5 mb-2">
      { 
      (props.item.length === 0) ? <p className="px-3 font-light">Belum ada kegiatan...</p> :
        props.item.map((a, i) => 
          <div className="flex justify-between px-3" key={i} value={i}>
            <div className="flex">
            <button onClick={props.sudah} className="px-2" type="submit"><img src={Done_black} alt="Done_black" /></button>
            <p>{(a.length > 15) ? a.substring(0, 15) + '...' : a }</p>
            </div>
            <div>
            <button onClick={props.hapus} className="px-2" type="submit"><img src={Delete_black} alt="Delete_black" /></button>
            </div>
          </div>
      )}
    </div>
    // <ul>
    //   {props.item.map((a, i) => <li className="text-left flex" key={i} onClick={props.hapus} value={i} id='a1' ><svg className="px-1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>{a}</li>)}
    // </ul>
  )
}
//
export default List;