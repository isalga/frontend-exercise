import './Card.less';
import React from 'react';
import Rating from 'react-rating';

const RecipeCard = ({ name, headline, image, calories, time }) => {
  const [favorited, setFavorited] = React.useState(false);
  const [rate, setRate] = React.useState(undefined);
  const favoritedIconClassName = favorited ? 'hearth favorited' : 'hearth';

  return (
    <div className='card'>
        <img src={image}/>
        <div className='info'>
          <label className={favoritedIconClassName} onClick={() => {
            setFavorited(!favorited);
          }}>❤</label>
          <Rating
            onChange={setRate}
            initialRating={rate}
            emptySymbol={<span className='rating-star'>☆</span>}
            fullSymbol={<span className='rating-star selected'>★</span>}/>
          <p>{name}</p>
          <p>{headline}</p>
          <p>{calories} / {time}</p>
        </div>
    </div>
  )
}

export default RecipeCard;