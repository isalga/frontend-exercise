import './List.less';
import React from 'react';
import RecipeCard from './Card';

const mock= {
  name: 'Lorem Ipsum ',
  headline: 'dolor sit amet, consetetur',
  image: 'https://picsum.photos/200/300'
}

const RecipeList = ({ recipes = [mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock, mock] }) => (
  <div className='list-container'>
    {recipes.map(recipe => <RecipeCard {...recipe}/>)}
  </div>
)

export default RecipeList;