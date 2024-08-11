import { useState, useEffect } from 'react';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import * as starshipService from './services/starshipService';

const App = () => {
  const [starships, setStarships] = useState([]);

  const getStarshipList = async () => {
    const starshipData = await starshipService.getStarship();
    setStarships(starshipData.results);
  };

  useEffect(() => {
    getStarshipList();
  }, []);

  return (
    <>
    <StarshipSearch />
    <StarshipList starships={starships} />
    </>
  );
};

export default App;