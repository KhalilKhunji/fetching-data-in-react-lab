import StarshipCard from './StarshipCard';

const StarshipList = ({starships}) => {
    return(
        <>
            <h1>Starships!</h1>
            {starships.map((starship) => (
                <StarshipCard  key={starship.name} starship={starship} />
            ))}
        </>
    );
};

export default StarshipList;