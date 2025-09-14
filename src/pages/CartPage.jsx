import { useCart } from '../context/CartContext.jsx';

export default function CartPage({ onBackToMenu }) {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

    const handleQuantityChange = (itemId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(itemId);
        } else {
            updateQuantity(itemId, newQuantity);
        }
    };

    return (
        <div className="cart-page">
            <div className="cart-page-header">
                <button className="back-to-menu-btn" onClick={onBackToMenu}>
                    ← Back to Menu
                </button>
                <h1>Your Cart</h1>
            </div>

            <div className="cart-page-content">
                {cart.items.length === 0 ? (
                    <div className="empty-cart-page">
                        <div className="empty-cart-icon">🛒</div>
                        <h2>Your cart is empty</h2>
                        <p>Add some delicious items from our menu!</p>
                        <button className="continue-shopping-btn" onClick={onBackToMenu}>
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <div className="cart-page-layout">
                        <div className="cart-items-section">
                            <h2>Cart Items ({cart.items.reduce((total, item) => total + item.quantity, 0)})</h2>
                            <div className="cart-items-list">
                                {cart.items.map((item) => (
                                    <div key={item.id} className="cart-item-card">
                                        <div className="item-image">
                                            <img 
                                                src={item.image || "https://via.placeholder.com/120x90/f8f9fa/2c3e50?text=Dish"} 
                                                alt={item.name}
                                                onError={(e) => {
                                                    e.target.src = "https://via.placeholder.com/120x90/f8f9fa/2c3e50?text=Dish";
                                                }}
                                            />
                                        </div>
                                        <div className="item-info">
                                            <h3 className="item-name">{item.name}</h3>
                                            <p className="item-portion">{item.portion}</p>
                                            <p className="item-description">{item.description || "Delicious and authentic preparation"}</p>
                                            <div className="item-price-info">
                                                <span className="unit-price">₹{item.price} each</span>
                                                <span className="total-price">Total: ₹{item.price * item.quantity}</span>
                                            </div>
                                        </div>
                                        <div className="item-actions">
                                            <div className="quantity-section">
                                                <label>Quantity:</label>
                                                <div className="quantity-controls">
                                                    <button 
                                                        className="quantity-btn decrease"
                                                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="quantity-display">{item.quantity}</span>
                                                    <button 
                                                        className="quantity-btn increase"
                                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <button 
                                                className="remove-item-btn"
                                                onClick={() => removeFromCart(item.id)}
                                                title="Remove item from cart"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="cart-summary-section">
                            <div className="summary-card">
                                <h2>Order Summary</h2>
                                <div className="summary-details">
                                    <div className="summary-row">
                                        <span>Total Items:</span>
                                        <span>{cart.items.reduce((total, item) => total + item.quantity, 0)}</span>
                                    </div>
                                    <div className="summary-row">
                                        <span>Subtotal:</span>
                                        <span>₹{cart.total}</span>
                                    </div>
                                    <div className="summary-row">
                                        <span>Tax (5%):</span>
                                        <span>₹{Math.round(cart.total * 0.05)}</span>
                                    </div>
                                    <div className="summary-row total-row">
                                        <span>Grand Total:</span>
                                        <span>₹{cart.total + Math.round(cart.total * 0.05)}</span>
                                    </div>
                                </div>
                                
                                <div className="cart-actions">
                                    <button 
                                        className="clear-cart-btn"
                                        onClick={clearCart}
                                    >
                                        Clear Cart
                                    </button>
                                    <button 
                                        className="checkout-btn"
                                        onClick={() => alert('Checkout functionality would be implemented here!')}
                                    >
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
