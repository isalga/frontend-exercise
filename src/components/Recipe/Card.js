import './Card.less';
import React from 'react';

const RecipeCard = ({ name, headline, image }) => (
  <div className='card'>
      <img src={image} width={150} height={150}/>
      <p>{name}</p>
      <p>{headline}</p>
  </div>
)

export default RecipeCard;