
import React from 'react';
const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc',
  },
};

const CartItem = () => (
  <div className="cart-item">
    <div className="left-block" />
    <div className="left-block">
      s
      <img style={styles.image} />
    </div>
    <div className="right-block">
      <div style={{ fontSize: 25 }}>Phone</div>
      <div style={{ color: '#777' }}>Rs 999</div>
      <div style={{ color: '#777' }}>Qty: 1</div>
      <div className="cart-item-actions">
        {/* Buttons */}
      </div>
    </div>
  </div>
);

export default CartItem;