'use client';
import Link from "next/link";
import '@/style/components/HeaderLink.css'
import { useState, useRef, useEffect } from "react";

function HeaderLink({ type = null, title = '', href = "#", otherLinks = null }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Fermer le menu si clic à l'extérieur
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (!type) {
        return <Link className="header-simple-link" href={href}>{title}</Link>;
    }

    if (type === 'multiple' && otherLinks) {
        return (
            <div className="header-multiple-links" ref={dropdownRef}>
                <button type="button" onClick={() => setIsOpen(!isOpen)}>
                    {title}
                </button>
                {isOpen && (
                    <div className="header-others-links">
                        {
                            otherLinks.map((link, index) => (
                                <Link key={`link-${index}`} href={link.href}>{link.title}</Link>
                            ))
                        }
                    </div>
                )}
            </div>
        );
    }

    return null;
}

export default HeaderLink;
