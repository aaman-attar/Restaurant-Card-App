import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { dish, portion, price } = action.payload;
      const addItemId = `${dish.name}-${portion}`;
      
      const existingItemIndex = state.items.findIndex(item => item.id === addItemId);
      
      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        return {
          ...state,
          items: updatedItems,
          total: state.total + price
        };
      } else {
        const newItem = {
          id: addItemId,
          name: dish.name,
          portion,
          price,
          quantity: 1,
          image: dish.image,
          description: dish.description
        };
        return {
          ...state,
          items: [...state.items, newItem],
          total: state.total + price
        };
      }
    
    case 'REMOVE_FROM_CART':
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (!itemToRemove) return state;
      
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      return {
        ...state,
        items: filteredItems,
        total: state.total - (itemToRemove.price * itemToRemove.quantity)
      };
    
    case 'UPDATE_QUANTITY':
      const { itemId: updateItemId, newQuantity } = action.payload;
      if (newQuantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_FROM_CART', payload: updateItemId });
      }
      
      const itemToUpdate = state.items.find(item => item.id === updateItemId);
      if (!itemToUpdate) return state;
      
      const quantityDifference = newQuantity - itemToUpdate.quantity;
      const updatedItems = state.items.map(item =>
        item.id === updateItemId ? { ...item, quantity: newQuantity } : item
      );
      
      return {
        ...state,
        items: updatedItems,
        total: state.total + (itemToUpdate.price * quantityDifference)
      };
    
    case 'CLEAR_CART':
      return {
        items: [],
        total: 0
      };
    
    default:
      return state;
  }
};

const initialState = {
  items: [],
  total: 0
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (dish, portion, price) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { dish, portion, price }
    });
    
    // Return success indicator for UI feedback
    return {
      success: true,
      message: `${dish.name} (${portion}) added to cart!`
    };
  };

  const removeFromCart = (itemId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: itemId
    });
  };

  const updateQuantity = (itemId, newQuantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { itemId, newQuantity }
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getCartCount = () => {
    return cart.items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
