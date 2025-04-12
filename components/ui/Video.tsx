import React from 'react'

export default function Video() {
    return (
        <section className="malvinas-video">
            <div className="container">
                <h2 className="title">
                Malvinas: Todo sobre la historia de nuestras islas
                </h2>
                <div className="video-wrapper">
                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/k76-_Dl41w4?si=zhGeuNveO0xI4C-e"
                        title="Video sobre la Guerra de las Malvinas"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="video-iframe"
                    />
                </div>
                <p className="video-source">
                    Fuente: 
                    <a 
                        className='link'
                        target="_blank" rel="noopener noreferrer"
                        href="https://www.youtube.com/@FelipePignaHistoria"
                    >
                        Felipe Pigna - YouTube
                    </a>
                </p>
                </div>
            </div>
        </section>
    )
}