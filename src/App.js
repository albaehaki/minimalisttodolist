import Add_black from './add_black_24dp.svg';
import './App.css';
import { Component } from 'react';
import List from './List';
import Mati from './Mati';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      simpan : [],
      item : [],
      selesai : [],
      lenyap : [],
      singgah : []
    };
  }

//function untuk menjalankan semuanya

  submit = e => {
    e.preventDefault();
    this.setState({
      item : this.state.item.concat(this.state.simpan),
      simpan : []
    });

  };

//function untuk mengambil value input ke simpan state

  ubah = e => {
    this.setState({
      simpan : e.target.value
    })
  }

  //function untuk memindahkan kegiatan yang sudah selesai di kerjakan 

   sudah = e => {
     let a = e.target.parentNode.parentNode.parentNode.getAttribute("value");
     let b = this.state.item.splice(a, 1);
    this.setState({
      selesai : this.state.selesai.concat(b)
    });
  }

//function untuk membalikkan list yang ingin akan di gunakan kembali

   balik = e => {
     let a = e.target.parentNode.parentNode.parentNode.getAttribute("value");
     let b = this.state.selesai.splice(a, 1);
    this.setState({
      item : this.state.item.concat(b)
    });
  }

//function hapus untuk list yang salah

  hapus = e => {
    let a = e.target.parentNode.parentNode.parentNode.getAttribute("value");
    let b = this.state.item.splice(a, 1);
    this.setState({
      lenyap : this.state.lenyap.concat(b)
    });
  }

//function hapus untuk list yang dah selesai

  hapus1 = e => {
    let a = e.target.parentNode.parentNode.parentNode.getAttribute("value");
    let b = this.state.selesai.splice(a, 1);
    this.setState({
      lenyap : this.state.lenyap.concat(b)
    });
  }

  render() {
    return(
      <div className="flex justify-center flex-col sm:w-2/5 w-4/5 text-gray-700">
        <h3 className='my-10 text-center' >To Do List</h3>
        <form onSubmit={this.submit} className="pl-2 py-2 shadow flex text-center justify-center border-2 border-white">
          <input placeholder="Apa yang ingin anda lakukan ?" className="outline-none sm:w-11/12 w-10/12 " type="text" onChange={this.ubah} value={this.state.simpan} />
          <button className="py-1 w-2/12 sm:w-1/12 bg-white text-black flex justify-center"><img className="" src={Add_black} alt="Add_black" /></button>
        </form>
        <List className="items-start w-1/5" item={this.state.item} sudah={this.sudah} hapus={this.hapus}/>
        <Mati className="items-start w-1/5" nos={this.state.selesai} balik={this.balik} hapus={this.hapus1}/>
      </div>
    )
  }
}

export default App;
