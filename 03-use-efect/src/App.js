import logo from './logo.svg';
import './App.css';
import { PruebasComponentes } from './componentes/PruebasComponentes';
import { AjaxComponent } from './componentes/AjaxComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AjaxComponent></AjaxComponent>
        <PruebasComponentes></PruebasComponentes>
      </header>
    </div>
  );
}

export default App;
