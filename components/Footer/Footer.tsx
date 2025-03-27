import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Facebook from '../../public/footer/facebook.png';
import Instagram from '../../public/footer/instagram.png';
import Malvinas from "../../public/cards/malvinas.png";

const footerLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Historia', href: '/about' },
  { name: 'Fragmentos', href: '/services' },
  { name: 'Notas', href: '/contact' },
  { name: 'Contacto', href: '/contact' },
  { name: 'Contacto', href: '/contact' },
  { name: 'Política de Privacidad', href: '/privacy' },
  { name: 'Términos y Condiciones', href: '/terms' },
];

const socialLinks = [
  { id: 1, icon: Facebook, href: 'https://www.facebook.com/guille.huircapan.7' },
  { id: 2, icon: Instagram, href: 'https://www.instagram.com/guille.huir/' },
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
            <p>© {new Date().getFullYear()} Melipal | Guillermo Nelson Antonio Huircapan. Todos los derechos reservados.</p>
            <Image src={Malvinas} alt="Combate" height={40} />
            <div className="sitemap">
            <a 
                target="_blank" rel="noopener noreferrer"
                href="https://www.google.com/maps/place/Pradera+del+Ganso+FIQQ+1ZZ,+Islas+Malvinas+(Falkland+Islands)/@-51.8204404,-58.9885933,13.33z/data=!4m6!3m5!1s0xbc2af00fc0651983:0xa19d8481bb24f14e!8m2!3d-51.827387!4d-58.973067!16zL20vMDNkeG5i!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
            >
                Mapa del Sitio (Goose Green - Malvinas)
            </a>
            </div>
        </div>
        </footer>
    )
}

export default Footer