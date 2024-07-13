import './App.css';
import Carousel from './components/Carousel';
import IMAGES from "./components/Data.js";

function App() {
  return (
    <div className="App">
      <div className="topContent">
        <h2>Galeria</h2>
      </div>
      <Carousel images={IMAGES} />
    </div>
  );
}

export default App;