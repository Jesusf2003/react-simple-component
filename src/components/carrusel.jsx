import React, { useState, useEffect } from 'react'

const Carrusel = ({ images, interval = 1000 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    //     }, interval);
    //     return () => clearInterval(intervalId);
    // }, [images.length, interval]);
    
    const verAuto = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div>
            <header>
                <div id="numeros">
                    {images.map((_, index) => (
                        <a key={index} href="#" onClick={(e) => {
                            e.preventDefault();
                            verAuto(index);
                        }} data-auto={index}>{index}</a>
                    ))}
                </div>
                <img id="auto" name="autoActual" src={images[currentImageIndex]} />
            </header>
            <h2 id="numeroAuto">{`autos[${currentImageIndex}]`}</h2>
        </div>
    );
}

export default Carrusel;