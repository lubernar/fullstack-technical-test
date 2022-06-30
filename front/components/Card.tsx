import React from 'react'
import PropTypes from 'prop-types'
import { Hit } from 'react-instantsearch-core';
import styles from '../styles/Home.module.css'
import { useAppContext } from 'context/AppContext';

type CardProp = {
  image: string;
  name: string;
  salePrice: number;
  objectID: number;
  hit: Hit;
};

function Card(props: CardProp) {

  const { cart, addToCart, removeFromCart } = useAppContext();

  const { image, name, salePrice, objectID } = props;

  const addProduct = () => {
    addToCart(objectID, {
      objectID,
      image,
      name,
      salePrice,
      quantity: 1
    })
  }

  const removeProduct = () => {
    removeFromCart(objectID);
  }

  const isInCart = (): boolean => {
    return cart[0].items.find(item => item.objectID === objectID);
  }

  return (
    <div className={styles.card}>
      <img src={image}></img>
      <h3>{name}</h3>
      <p>{salePrice}€</p>
      {!isInCart() ?
        <button onClick={addProduct}>
          {`Ajouter au panier`}
        </button>
        :
        <button onClick={removeProduct}>
          {`Retirer du panier`}
        </button>
      }
    </div>
  )
}

Card.prototype = {
  image: PropTypes.string,
  name: PropTypes.string,
  salePrice: PropTypes.number
}

export default Card