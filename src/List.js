import './App.css';
import React from 'react';
import Done_black from './done_black_24dp.svg';
import Delete_black from './remove_black_24dp.svg';
import More_vert_black from './more_vert_black_24dp.svg';

  

function  List(props) {

  return (
    <div className="shadow-sm pb-5 pt-5 mb-2 ">
      { 
      (props.item.length === 0) ? <p className="px-3 font-light">Belum ada kegiatan...</p> :
        props.item.map((a, i) => 
          <div key={i} className=''>
            <div className="flex justify-between px-3 py-1" value={i}>
            <div className="flex">
            <button onClick={props.sudah} className="px-2" type="submit"><img src={Done_black} alt="Done_black" /></button>
            <p>{(a.length > 15) ? a.substring(0, 10) + '...' : a }</p>
            </div>
            <div>
            <button onClick={props.hapus} className="px-2" type="submit"><img src={Delete_black} alt="Delete_black" /></button>
            <button onClick={props.detail} className="px-2" type="submit"><img src={More_vert_black} alt="More_vert_black" /></button>
            </div>
            </div>
            {props.tampil && (props.nilai == i)? <p className='bg-gray-50 flex py-1 px-3 flex-auto break-all w-xl'>{a}</p> : ''}
          </div>
      )}
    </div>
  )
}

export default List;