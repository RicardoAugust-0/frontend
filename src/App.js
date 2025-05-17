import React from 'react';
import './App.css';

import { useEffect, useRef, useState } from 'react';

function App() {

    const videos = [
        '/media/background1.mp4',
        '/media/background2.mp4',
        '/media/background3.mp4'
    ];

    const [currentVideo, setCurrentVideo] = useState(0);
    const [fade, setFade] = useState(false);
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        // Inicia o efeito de fade out 
        setFade(true);

        setTimeout(() => {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
            setFade(false);
        }, 500);
    };

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.load();
            video.play();
        }
    }, [currentVideo]);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Fundo preto fixo */}
            <div className="fixed top-0 left-0 w-full h-full bg-black z-0" />

            {/* Vídeo por cima com fade */}
            <video
                ref={videoRef}
                onEnded={handleVideoEnd}
                muted
                playsInline
                autoPlay
                className={`object-cover w-full h-full fixed top-0 left-0 z-10 transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'
                    }`}
            >
                <source src={videos[currentVideo]} type="video/mp4" />
                Seu navegador não suporta vídeos.
            </video>
        </div>
    );
}

export default App;
