import React, { useState } from 'react';
import styles from "../../styles/Reusable/Navbar.module.css";
import logo from '../../images/logo.webp';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import both icons
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false); // Close the menu when a link is clicked
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.brand}>
                    <img src={logo} alt="nexuslogo" />
                    <a href="#">NexusBite</a>
                </div>
                <div className={styles.menuIcon} onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <FaTimes color="white" size={30} />  // Show cross icon when menu is open
                    ) : (
                        <FaBars color="white" size={30} />  // Show bars icon when menu is closed
                    )}
                </div>
                <nav className={`${styles.navbar} ${isMenuOpen ? styles.active : ''}`}>
                    <ul>
                        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                        <li><Link to="/checkHistory" onClick={handleLinkClick}>Check History</Link></li>
                        <div className={styles.bookBtn}>
                            <Link to="/reserve" onClick={handleLinkClick}>
                                <button>Book a Table</button>
                            </Link>
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
