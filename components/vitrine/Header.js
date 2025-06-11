'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // React Icons
import '@/style/components/Header.css';
import HeaderLink from "./HeaderLink";

function NavHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className={`nav-header ${menuOpen ? 'open' : ''}`}>
            <div className="header-logo">
                <Image width={200} height={120} src="/isi_logo.png" alt="Logo isi" />
            </div>

            <button className="burger-icon" onClick={toggleMenu}>
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            <nav className={`header-links ${menuOpen ? 'show' : ''}`}>
                <HeaderLink href="/" title="Accueil" />
                <HeaderLink
                    type='multiple'
                    title="Institut"
                    otherLinks={[
                        { title: "Mot du directeur", href: "/mot-du-directeur" },
                        { title: "Notre mission", href: "/our-mission" },
                        { title: "Choisir ISI ?", href: "/choisir-isi" },
                        { title: "Bacheliers", href: "/bacheliers" }
                    ]}
                />
                <HeaderLink
                    type='multiple'
                    title="Etablissement"
                    otherLinks={[
                        { title: "Formation Scientifique", href: "/formation-scientifique" },
                        { title: "Formation Classique", href: "/formation-classique" }
                    ]}
                />
                <HeaderLink title="Actualité" href="/actualite" />
                <HeaderLink title="Contact" href="/contact" />
                <HeaderLink title="S'inscrire" href="/inscription" />
            </nav>
        </header>
    );
}

export default NavHeader;
