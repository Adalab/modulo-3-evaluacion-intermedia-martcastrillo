// Fichero src/components/App.js
import '../styles/App.scss';

/* const App = () => {
  
  const tasks = [
    'Comprar harina, jamón y pan rallado',
    'Hacer croquetas ricas',
    'Ir a la puerta de un gimnasio',
    'Comerme las croquetas mirando a la gente que entra en el gimnasio',
  ];

  const renderList = () => {
    return tasks.map((task, index) => {
    
    return (
       
        <li key={index}>
          {task}
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <ol>{renderList()}</ol>
    </div>
  );
};

export default App; */

const App = () => {
  
  const tasks = [
    {task: 'Comprar harina, jamón y pan rallado', completed: true},
    {task: 'Hacer croquetas ricas', completed: true},
    {task: 'Ir a la puerta de un gimnasio', completed: false},
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ];

  const renderList = () => {
    
   
    return tasks.map((task, index) => {
  
    return (
      task.completed ? (className ='done' ): (className ='') ;
        <li key={index} className= ''>
          {tasks[index].task}
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <ol>{renderList()}</ol>
    </div>
  );
};

export default App;
