import React from 'react'

export default function Video() {
    return (
        <section className="malvinas-video">
            <div className="container">
                <h2 className="title">
                Malvinas: Un Capítulo en la Historia Argentina
                </h2>
                <div className="video-wrapper">
                <div className="video-container">
                    <iframe
                    src="https://www.youtube.com/embed/Kz_1MSbVYT4"
                    title="Video sobre la Guerra de las Malvinas"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video-iframe"
                    />
                </div>
                <p className="video-source">
                    Fuente: Armapedia en YouTube
                </p>
                </div>
            </div>
        </section>
    )
}