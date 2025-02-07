import React, { useState, useEffect } from 'react';
import './ChiSiamo.css';

import photo1 from '../../assets/1724930121449.jpg';
import photo2 from '../../assets/1724930121483.jpg';
import photo3 from '../../assets/1724930121416.jpg';
import photo4 from '../../assets/1724930121548.jpg';
import photo5 from '../../assets/1724930121345.jpg';
import photo6 from '../../assets/1724930121382.jpg';
import photo7 from '../../assets/1724930121518.jpg';

const slides = [
    { id: 1, src: photo1, alt: "Immagine 1" },
    { id: 2, src: photo2, alt: "Immagine 2" },
    { id: 3, src: photo3, alt: "Immagine 3" },
    { id: 4, src: photo4, alt: "Immagine 4" },
    { id: 5, src: photo5, alt: "Immagine 5" },
    { id: 6, src: photo6, alt: "Immagine 6" },
    { id: 7, src: photo7, alt: "Immagine 7" }
];

const ChiSiamo = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
        }, 3000); // Cambia immagine ogni 5 secondi

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, [isPaused, currentIndex]);

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
        resetInterval();
    };

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + slides.length) % slides.length);
        resetInterval();
    };

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    const resetInterval = () => {
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 0);
    };

    return (
        <div className="chi-siamo-container">
            <div className="chi-siamo-carousel">
                <div 
                    className="carousel-inner" 
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="carousel-slide">
                            <img src={slide.src} alt={slide.alt} />
                        </div>
                    ))}
                </div>
                <button className="carousel-button prev" onClick={prevSlide}>❮</button>
                <button className="carousel-button next" onClick={nextSlide}>❯</button>
            </div>
            <div className="chi-siamo-text">
                <h1>Chi Siamo</h1>
                <p>
                TASL è un'organizzazione dedicata alla promozione di Territorio, Ambiente, Salute e Lavoro. Offriamo corsi di formazione su vari temi per migliorare la qualità della vita e promuovere uno sviluppo sostenibile. Il nostro obiettivo è fornire conoscenze e strumenti per affrontare le sfide contemporanee, contribuendo a un futuro più sano e inclusivo. Unisciti a noi per fare la differenza!
                </p>
            </div>
        </div>
    );
};

export default ChiSiamo;
