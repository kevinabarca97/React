import { useState } from 'react';
import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRoutes } from './routes/AppRoutes';

function App() {

  const [usuario, setUsuario] = useState({
    nick: '@kevin abarca',
    email: 'example@example.com'
  });
  const curso = {
    id: 1,
    odt: 23432,
    ft: 2
  }
  return (
    <div className="App">
      <header className="App-header">
        <PruebaContext.Provider value={{
          usuario,
          setUsuario
        }}>
          <AppRoutes/>
        </PruebaContext.Provider>
      </header>
    </div>
  );
}

export default App;
