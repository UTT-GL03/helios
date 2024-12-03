import React from 'react';
import '../App.css';

function Footer() {
    return (
        <footer className="container-fluid">
            <hr />
            <div className="grid">
                <section>
                    <h5>HELIOS</h5>
                    <p>Your trusted source for accurate and minimalist weather forecasts.</p>
                </section>
                <section>
                    <h6>Quick Links</h6>
                    <div>
                        <a href="/article">Article of the Day</a>
                    </div>
                    <div>
                        <a href="mailto:eve.bernhard@utt.fr">Contact Us</a>
                    </div>
                </section>
            </div>
            <p className="text-center">© {new Date().getFullYear()} Helios App. Licensed under the GNU AGPLv3.<br />See LICENSE for details.
            </p>
        </footer>
    )
}

export default Footer;