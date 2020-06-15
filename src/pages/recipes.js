import React from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import RecipeList from '../components/Recipe/List';

const Recipes = () => {
  const [appState, setAppState] = React.useState({
    loading: false,
    recipes: [],
  });

  React.useEffect(() => {
    setAppState({ loading: true });
    axios.get(
      'http://localhost:3000/api/recipes'
    )
    .then(response => {
      const recipes = response.data;
      setAppState({ loading: false, recipes });
    })
    .catch(console.log)
  }, [setAppState]);

  return (
    <Layout>
      <RecipeList recipes={appState.recipes}/>
    </Layout>
  )
}

export default Recipes;