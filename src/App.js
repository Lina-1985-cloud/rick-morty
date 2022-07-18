import imageRickMorty from './img/rick-morty.png'
import './App.css';
import { useState } from 'react';
import Character from './components/Character';

function App() {
  // Generamos un estado para poder pasarle toda la info a un nuevo componente que sera el encargado de renderizara todos los datos
  const [characters, setCharacters] = useState(null)

  // Hacemos una petición asincrona de la url de rick and morty para obtener los datos
  const reqApi = async ()=>{
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json();// Nos devuelve un array de objetos con mucha mas informacion para ser mapeada y extraer lo que nececitamos
    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick &Morty</h1>
        {characters ?(
          <Character characters = {characters} setCharacters={setCharacters}/>

        ) : (
          <>
            <img src={imageRickMorty} alt='Rick & Morty' className='img-home'></img>
            <button onClick={reqApi} className="btn-search">
              Buscar personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
