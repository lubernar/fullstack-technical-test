import React from 'react'
import PropTypes from 'prop-types'
import { Hit } from 'react-instantsearch-core';
import styles from '../styles/Home.module.css'

type CardProp = {
  image: string;
  name: string;
  salePrice: number;
  hit: Hit;
};

function Card(props: CardProp) {
  const { image, name, salePrice } = props;
  return (
    <div className={styles.card}>
      <img src={image}></img>
      <h3>{name}</h3>
      <p>{salePrice}€</p>
      <button>
        Ajouter au panier
      </button>
    </div>
  )
}

Card.prototype = {
  image: PropTypes.string,
  name: PropTypes.string,
  salePrice: PropTypes.number
}

export default Card