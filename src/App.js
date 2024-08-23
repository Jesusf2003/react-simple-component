import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Carrusel from './components/carrusel';
import Formulary from './components/formulary';
import Chau from './components/adio';

function App() {

    const carImages = [];
    for (let i = 0; i < 10; i++) {
        carImages.push(`./images/auto_${i}.jpg`);
    }

    return (
        <div id="contenedor">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand">
                    Fernando
                </Link>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/"} className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/mycarrusel"} className="nav-link">Carrusel</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/form"} className="nav-link">Adios</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/despedida"} className="nav-link">Adios</Link>
                    </li>
                </div>
            </nav>
            <div className='container mt-3'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mycarrusel" element={<Carrusel images={carImages} />} />
                    <Route path="/form" element={<Formulary />} />
                    <Route path="/despedida" element={<Chau />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
