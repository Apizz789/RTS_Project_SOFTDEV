import React from 'react'
import { Link } from 'react-router-dom';

function CardItem() {
  return (
    <>
      <li className="card__item">
        <Link className="card__item__link">
          <figure className="card__item__pic-wrap">
            <img src="/" alt="TrainImage" className="card__item__img"/>
          </figure>
          <div className="card__item__info">
            <h5 className="card__item__text">
              
            </h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
