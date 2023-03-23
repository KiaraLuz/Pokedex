import './App.css';
import { AppRouter } from "./router/AppRouter"
import { PokemonProvider } from './context/PokemonProvider';

function App() {
  return (
    <div className='App'>
      <PokemonProvider>
        <AppRouter />
      </PokemonProvider>
    </div>
  );
}

export default App;
