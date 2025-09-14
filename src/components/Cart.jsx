import { useCart } from '../context/CartContext.jsx';

export default function Cart({ isOpen, onClose }) {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

    if (!isOpen) return null;

    const handleQuantityChange = (itemId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(itemId);
        } else {
            updateQuantity(itemId, newQuantity);
        }
    };

    return (
        <div className="cart-overlay">
            <div className="cart-modal">
                <div className="cart-header">
                    <h2>Your Cart</h2>
                    <button className="close-cart" onClick={onClose}>
                        ✕
                    </button>
                </div>

                <div className="cart-content">
                    {cart.items.length === 0 ? (
                        <div className="empty-cart">
                            <p>Your cart is empty</p>
                            <p>Add some delicious items from our menu!</p>
                        </div>
                    ) : (
                        <>
                            <div className="cart-items">
                                {cart.items.map((item) => (
                                    <div key={item.id} className="cart-item">
                                        <div className="item-image">
                                            <img 
                                                src={item.image || "https://via.placeholder.com/80x60/f8f9fa/2c3e50?text=Dish"} 
                                                alt={item.name}
                                                onError={(e) => {
                                                    e.target.src = "https://via.placeholder.com/80x60/f8f9fa/2c3e50?text=Dish";
                                                }}
                                            />
                                        </div>
                                        <div className="item-details">
                                            <h4 className="item-name">{item.name}</h4>
                                            <p className="item-portion">{item.portion}</p>
                                            <p className="item-price">₹{item.price} each</p>
                                        </div>
                                        <div className="item-controls">
                                            <div className="quantity-controls">
                                                <button 
                                                    className="quantity-btn"
                                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                >
                                                    -
                                                </button>
                                                <span className="quantity">{item.quantity}</span>
                                                <button 
                                                    className="quantity-btn"
                                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <div className="item-total">
                                                ₹{item.price * item.quantity}
                                            </div>
                                            <button 
                                                className="remove-item"
                                                onClick={() => removeFromCart(item.id)}
                                                title="Remove item"
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="cart-summary">
                                <div className="total-section">
                                    <div className="total-row">
                                        <span className="total-label">Total Items:</span>
                                        <span className="total-value">
                                            {cart.items.reduce((total, item) => total + item.quantity, 0)}
                                        </span>
                                    </div>
                                    <div className="total-row grand-total">
                                        <span className="total-label">Grand Total:</span>
                                        <span className="total-value">₹{cart.total}</span>
                                    </div>
                                </div>

                                <div className="cart-actions">
                                    <button 
                                        className="clear-cart-btn"
                                        onClick={clearCart}
                                        disabled={cart.items.length === 0}
                                    >
                                        Clear Cart
                                    </button>
                                    <button 
                                        className="checkout-btn"
                                        disabled={cart.items.length === 0}
                                    >
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
