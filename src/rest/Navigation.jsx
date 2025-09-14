import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext.jsx';

export default function Navigation({ sections, onCartToggle }) {
    const [activeSection, setActiveSection] = useState('');
    const { getCartCount } = useCart();

    const scrollToSection = (sectionName) => {
        const element = document.getElementById(sectionName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase());
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.menu-section');
            let currentSection = '';

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const cartCount = getCartCount();

    return (
        <nav className="menu-navigation">
            <div className="nav-container">
                <div className="nav-header">
                    <h3 className="nav-title">Menu Sections</h3>
                    <button 
                        className="cart-button"
                        onClick={onCartToggle}
                    >
                        🛒 View Cart
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </button>
                </div>
                <ul className="nav-list">
                    {sections.map((sectionName) => {
                        const sectionId = sectionName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
                        return (
                            <li key={sectionName} className="nav-item">
                                <button
                                    className={`nav-link ${activeSection === sectionId ? 'active' : ''}`}
                                    onClick={() => scrollToSection(sectionName)}
                                >
                                    {sectionName}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
