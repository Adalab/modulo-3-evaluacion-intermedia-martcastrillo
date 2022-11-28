
import '../styles/App.scss';
import contacts from '../data/contacts'
import { useState } from 'react';


const App = () => {
  //varstate
  const [data, setData] = useState(contacts.results);
  const [newAdalaber, setNewAdalaber] = useState({
    "id": "",
    "name": "",
    "counselor": "",
    "speciality": "",
  });
  //useffect
  //handlers

  const handleNewAdalaber = (ev) => {
    setNewAdalaber({ ...newAdalaber, [ev.target.id]: ev.target.value });
  };
  const handleClick = (ev) => {
    ev.preventDefault();
    setData([...data, newAdalaber]);
    setNewAdalaber({
      "id": "",
      "name": "",
      "counselor": "",
      "speciality": "",
    })

  };
  //fctions


  const htmlData = data.map((adalaber) => {
    return (
      <tr key={adalaber.id}>
        <td>{adalaber.name}</td>
        <td>{adalaber.counselor}</td>
        <td>{adalaber.speciality}</td>
      </tr>

    )
  });
  return (
    <div>
      <h1>Adalabers</h1>
      <div >
        <form action="" className="formsearch">
          <label htmlFor="">Nombre</label>
          <input type="text" placeholder=' Ej: MariCarmen' />
          <label htmlFor="">Escoje una tutora</label>
          <select name="" id="" className="" >
            <option disabled>Escoge una opción</option>
            <option value="Dayana">Dayana</option>
            <option value="Iván">Iván</option>
            <option value="Yanelis">Yanelis</option>

          </select>
        </form>
      </div>
      <table className="table">
        <thead className="thead"><tr>
          <th>Nombre</th>
          <th>Tutora</th>
          <th>Especialidad</th>
        </tr></thead>
        <tbody>
          {htmlData}
        </tbody>
      </table>
      <h2>Añadir una Adalaber</h2>
      <div className='divadd'>
        <form >
          <div className="formadd">
          <div className='formbox'>
            <label htmlFor="">Nombre:</label>
            <input type="text" id="name" onInput={handleNewAdalaber} value={newAdalaber.name} />
          </div>
          <div className='formbox'>
            <label htmlFor="">Tutora:</label>
            <input type="text" id="counselor" onInput={handleNewAdalaber} value={newAdalaber.counselor} />
          </div>
          <div className='formbox'>
            <label htmlFor="">Especialidad:</label>
            <input type="text" id="speciality" onInput={handleNewAdalaber} value={newAdalaber.speciality} />
          </div>
          </div>
          <button className="button" onClick={handleClick}>Añadir una nueva Adalaber</button>
        </form>
      </div>
    </div>
  );
};

export default App;
