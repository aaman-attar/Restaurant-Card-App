import { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';

export default function Cards({ dish, onItemAdded }) {
    const [selectedPortion, setSelectedPortion] = useState('');
    const [showPortionSelector, setShowPortionSelector] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [justAdded, setJustAdded] = useState(false);
    const { addToCart } = useCart();

    const formatPrice = (priceObj) => {
        const prices = [];
        if (priceObj.full) prices.push(`Full: ₹${priceObj.full}`);
        if (priceObj.half) prices.push(`Half: ₹${priceObj.half}`);
        if (priceObj.qtr) prices.push(`Qtr: ₹${priceObj.qtr}`);
        if (priceObj.seasonal) prices.push('(Seasonal)');
        return prices.join(' | ');
    };

    const getAvailablePortions = () => {
        const portions = [];
        if (dish.price.full) portions.push({ key: 'full', label: 'Full', price: dish.price.full });
        if (dish.price.half) portions.push({ key: 'half', label: 'Half', price: dish.price.half });
        if (dish.price.qtr) portions.push({ key: 'qtr', label: 'Quarter', price: dish.price.qtr });
        return portions;
    };

    const handleAddToCart = async () => {
        const portions = getAvailablePortions();
        
        if (portions.length === 1) {
            // If only one portion available, add directly
            const portion = portions[0];
            setIsAdding(true);
            
            const result = addToCart(dish, portion.label, portion.price);
            if (result.success && onItemAdded) {
                onItemAdded(result.message);
            }
            
            setJustAdded(true);
            setTimeout(() => {
                setIsAdding(false);
                setJustAdded(false);
            }, 1500);
            setSelectedPortion('');
        } else {
            // Show portion selector
            setShowPortionSelector(true);
        }
    };

    const handlePortionSelect = (portion) => {
        setIsAdding(true);
        
        const result = addToCart(dish, portion.label, portion.price);
        if (result.success && onItemAdded) {
            onItemAdded(result.message);
        }
        
        setJustAdded(true);
        setTimeout(() => {
            setIsAdding(false);
            setJustAdded(false);
        }, 1500);
        
        setShowPortionSelector(false);
        setSelectedPortion('');
    };

    const portions = getAvailablePortions();

    return (
        <div className="menu-card">
            <div className="card-content">
                <h3 className="dish-name">{dish.name}</h3>
                
                <div className="dish-details">
                    <div className="dish-description">
                        <p>{dish.description || "Delicious and authentic preparation made with finest ingredients"}</p>
                    </div>
                    <div className="dish-image">
                        <img 
                            src={dish.image || "https://via.placeholder.com/150x100/f8f9fa/2c3e50?text=Dish"} 
                            alt={dish.name}
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/150x100/f8f9fa/2c3e50?text=Dish";
                            }}
                        />
                    </div>
                </div>
                
                <div className="card-actions">
                    {!showPortionSelector ? (
                        <>
                            <div className="price-info">
                                {formatPrice(dish.price)}
                            </div>
                            <button 
                                className={`add-to-cart-btn ${isAdding ? 'adding' : ''} ${justAdded ? 'added' : ''}`}
                                onClick={handleAddToCart}
                                disabled={isAdding}
                            >
                                {isAdding ? 'Adding...' : justAdded ? '✓ Added!' : 'Add to Cart'}
                            </button>
                        </>
                    ) : (
                        <div className="portion-selector">
                            <p className="portion-title">Select Portion:</p>
                            <div className="portion-buttons">
                                {portions.map((portion) => (
                                    <button
                                        key={portion.key}
                                        className="portion-btn"
                                        onClick={() => handlePortionSelect(portion)}
                                    >
                                        {portion.label} - ₹{portion.price}
                                    </button>
                                ))}
                            </div>
                            <button 
                                className="cancel-btn"
                                onClick={() => setShowPortionSelector(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}