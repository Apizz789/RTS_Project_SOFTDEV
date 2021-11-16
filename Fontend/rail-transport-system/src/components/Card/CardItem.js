import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'
function refreshPage(){
	window.scrollTo(0,0);
  }
  
function CardItem(props) {
  return (
    <>
      <li className='cards__item' onClick={refreshPage}>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;