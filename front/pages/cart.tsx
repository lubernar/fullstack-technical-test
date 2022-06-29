import React from 'react'
import styles from '../styles/Cart.module.css'
import { useAppContext } from 'context/AppContext';

function cart() {
  const { cart, addToCart, removeFromCart } = useAppContext();

  const totalPrice = () => {
    return cart[0].items.reduce((a, b) => a+ b.salePrice, 0);
  }

  return (
    <main className={styles.container}>
      <h2>{`Mon panier ${totalPrice()}€`}</h2>
      <div>
        {cart[0].items.map((item, i) => (
          <div className={styles.cart_items} key={i}>
            <img src={item.image}></img>
            <h4>{item.name}</h4>
            <p>{item.salePrice}€</p>
          </div>
        ))
        }
      </div>
    </main>
  )
}

export default cart