import { Link } from 'react-router-dom';
import { useState } from 'react';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div style={styles.container}>
            <nav style={styles.navbar}>
                <ul style={styles.navList}>
                    <li style={styles.navItem}><Link to="/" style={styles.link}>Home</Link></li>
                    <li style={styles.navItem}><Link to="/abouts" style={styles.link}>About</Link></li>
                    <li style={styles.navItem}><Link to="#" style={styles.link}>Services</Link></li>
                </ul>
                <button onClick={toggleLogin}>
                    {isLoggedIn ? 'Logout' : 'Login'}
                </button>
                <button style={styles.menuButton} onClick={toggleMenu}>☰</button>
            </nav>
            
            <div style={{ ...styles.sidebar, right: isOpen ? '0' : '-250px' }}>
                <button style={styles.closeButton} onClick={toggleMenu}>×</button>
                <ul style={styles.sidebarList}>
                    <li><Link to="#" style={styles.sidebarLink}>Dashboard</Link></li>
                    <li><Link to="/abouts" style={styles.sidebarLink}>Profile</Link></li>
                    <li><Link to="#" style={styles.sidebarLink}>Settings</Link></li>
                    <li><button onClick={toggleLogin} style={styles.sidebarLink}>
                        {isLoggedIn ? 'Logout' : 'Login'}
                    </button></li>
                </ul>
            </div>
        </div>
    );
};

export default HomePage;
