import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiMenu, mdiClose } from '@mdi/js';
import '../App.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <nav className="NavBar">
                <div className="NavBar-header">
                    <button
                        className="ProButton"
                        onClick={() => window.location.href = '/pro'}
                    >
                        Pro +
                    </button>
                    <Link to="/">
                        <h1>
                            HELIOS
                        </h1>
                    </Link>
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
                    <li><a href="mailto:eve.bernhard@utt.fr">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
