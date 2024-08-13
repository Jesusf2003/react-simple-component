import './App.css';
import Carrusel from './components/carrusel';

function App() {

    const carImages = [];

    for (let i = 0; i < 10; i++) {
        carImages.push(`./images/auto_${i}.jpg`);
    }

    return (
        <div id="contenedor">
            <h1 id="titulo">Modelo de auto</h1>
            <Carrusel images={carImages} interval={2000} />
        </div>
    );
}

export default App;
