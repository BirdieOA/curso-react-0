import logo from './logo.svg';
import './App.css';
import './miCss.css';
import imagen from "./logo.png";

function App() {
  let nombre= [{name: "Mai", edad:30}, {name: "Juan", edad:40}];
  let caja=<div>Nombre</div>;
  return (
    <div className="fondo">
     <h1>Curso React</h1>
     <div>{nombre[0].name}</div>
    <img src={imagen} className='im'/>
     <input value={nombre}/>
     <br/>
    </div>
  );
}

export default App;
