import './List.less';
import React from 'react';
import RecipeCard from './Card';

const RecipeList = ({ recipes = [] }) => (
  <div className='list-container'>
    {recipes.map(recipe => <RecipeCard {...recipe}/>)}
  </div>
)

export default RecipeList;