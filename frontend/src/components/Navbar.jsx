import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiMenu, mdiClose } from '@mdi/js';
import '../App.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="NavBar">
            <div className="NavBar-header">
                <button 
                    className="ProButton" 
                    onClick={() => window.location.href = '/pro'}
                >
                    Pro +
                </button>
                <button 
                    className="NavBarButton" 
                    onClick={toggleMenu} 
                    aria-expanded={menuOpen} 
                    aria-label="Toggle menu"
                >
                    <Icon path={menuOpen ? mdiClose : mdiMenu} size={1} />
                </button>
            </div>

            <ul className={`BurgerMenu ${menuOpen ? 'is-active' : ''}`}>
                <li><a href="/article">Article of the day</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="mailto:eve.bernhard@utt.fr">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
