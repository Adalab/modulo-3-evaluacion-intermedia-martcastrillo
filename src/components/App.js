
import '../styles/App.scss';
import contacts from '../data/contacts'
import { useState} from 'react';



const App = () => {
  //varstate
  const [data, setData] = useState(contacts.results);
  const [searchName, setSearchName] = useState('');
  const [searchCounselor, setSearchCounselor] = useState('');
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
  const handleSearchName = (ev) => {

    setSearchName(ev.target.value);
  }
  const handleSearchCouselor = (ev) => {
    setSearchCounselor(ev.target.value);
  }
  //fctions
 

  const htmlData = data
    .filter((filterName) => filterName.name.toLowerCase().includes(searchName.toLowerCase()))
    .filter((filterCounselor) => {
      let result = '';
      if (searchCounselor === 'Todos') {
         result = true;
        return result;
      }
      else if (filterCounselor.counselor === searchCounselor) {
        result = true;
        return result;
      }
      return result;
    })
    .map((adalaber) => {
      const socialNetworks = (adalaber.social_networks).map((social, index)=> {
        return (
       <li key={index} className='socialmedialist'>
          <a href={social.url}>{social.name}</a>
          </li>

        )});
      
      return (
        <tr key={adalaber.id}>
          <td>{adalaber.name}</td>
          <td>{adalaber.counselor}</td>
          <td>{adalaber.speciality}</td>
          <td>   <ul>{socialNetworks}</ul> </td>
         
        </tr>

      )
    });
 

  
  return (
    <div>
      <h1>Adalabers</h1>
      <div >
        <form action="" className="formsearch">
          <label htmlFor="">Nombre</label>
          <input type="text" placeholder=' Ej: MariCarmen' onInput={handleSearchName} value={searchName} />
          <label htmlFor="">Escoje una tutora</label>
          <select name="" id="" className="" onChange={handleSearchCouselor}>
            <option disabled>Escoge una opción</option>
            <option value="Todos">Todos</option>
            <option value="Dayana">Dayana</option>
            <option value="Iván">Iván</option>
            <option value="Yanelis">Yanelis</option>

          </select>
        </form>
      </div>
      <div className='superdivtable'>
      <table className="table">
        <thead className="thead"><tr>
          <th>Nombre</th>
          <th>Tutora</th>
          <th>Especialidad</th>
          <th colSpan={3} className='socialmediacolum'>Redes</th>
       
        </tr></thead>
        <tbody>
          {htmlData}
        </tbody>
      </table>
      </div>
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
