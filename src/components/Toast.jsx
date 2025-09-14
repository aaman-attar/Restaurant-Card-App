import { useState, useEffect } from 'react';

export default function Toast({ message, type = 'success', isVisible, onClose }) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000); // Auto close after 3 seconds

            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className={`toast toast-${type}`}>
            <div className="toast-content">
                <span className="toast-icon">
                    {type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}
                </span>
                <span className="toast-message">{message}</span>
                <button className="toast-close" onClick={onClose}>
                    ✕
                </button>
            </div>
        </div>
    );
}
