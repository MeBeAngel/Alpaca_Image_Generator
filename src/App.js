// Import Components
import Header from './components/Header';
import AlpacaGenerator from './components/AlpacaGenerator';

//Import styles
import './App.css';


function App() {
  return (
    <>
      <Header />
      <main className="container">
        <AlpacaGenerator />
      </main>
    </>
  );
}

export default App;
