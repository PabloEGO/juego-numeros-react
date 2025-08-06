import './App.css';
import Titulo from './components/Titulo';
import Juego from "./components/Juego";
function App() {
  return (
    <div className="App">
      <Titulo />
      <Juego maximo ={10}/>
    </div>
  );
}

export default App;
