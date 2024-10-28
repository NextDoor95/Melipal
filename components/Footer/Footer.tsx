import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Facebook from '../../public/footer/facebook.png';
import Instagram from '../../public/footer/instagram.png';

const footerLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre Nosotros', href: '/about' },
  { name: 'Servicios', href: '/services' },
  { name: 'Contacto', href: '/contact' },
  { name: 'Política de Privacidad', href: '/privacy' },
  { name: 'Términos y Condiciones', href: '/terms' },
];

const socialLinks = [
  { id: 1, icon: Facebook, href: 'https://facebook.com' },
  { id: 2, icon: Instagram, href: 'https://instagram.com' },
];

function Footer() {
    return (
        <footer className="footer">
        <div className="footer-container">
            <div className="company-info">
            <h3>Melipal</h3>
            <p>Un capítulo en la Guerra de Malvinas</p>
            </div>
            <nav className="footer-links">
            {footerLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                {link.name}
                </Link>
            ))}
            </nav>
            <div className="social-links">
            {socialLinks.map((link) => (
                <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer">
                <Image
                    src={link.icon}
                    alt='book'
                    className="card-icon"
                />
                </a>
            ))}
            </div>
        </div>
        <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Melipal | Guillermo Huircapan. Todos los derechos reservados.</p>
            <div className="sitemap">
            <a href="#">Mapa del Sitio</a>
            </div>
        </div>
        </footer>
    )
}

export default Footer