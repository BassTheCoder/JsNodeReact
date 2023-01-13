import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Projekt - javascript React+Node</h1>
      <h2>*wystawianie opinii o restauracjach czy coś*</h2>

      <div className="form">
        <label>Nazwa restauracji:</label>
        <input type="text" name="restaurantName"/>
        <label>Opinia:</label>
        <input type="text" name="review"/>

        <button>Submit</button>
      </div>

    </div>
  );
}

export default App;
