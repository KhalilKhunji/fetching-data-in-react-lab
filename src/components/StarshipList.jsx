import StarshipCard from './StarshipCard';

const StarshipList = ({starships}) => {
    return(
        <ul>
            {starships.map((starship) => (
                <li key={starship.name}>
                    {starship.name}
                    {starship.starship_class}
                    {starship.manufacturer}
                    {starship.model}
                </li>
            ))}
        </ul>
    );
};

export default StarshipList;