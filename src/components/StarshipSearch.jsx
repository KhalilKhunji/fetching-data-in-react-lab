import { useState } from 'react';

const StarshipSearch = ({getSearchship}) => {
    const [searchship, setSearchship] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        getSearchship(searchship);
        setSearchship('');
    };
    
    return(
        <>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="starship">Enter a starship's name:</label>
                <input id="starship" type="text" value={searchship} onChange={(event) => {setSearchship(event.target.value)}} />
                <button type="submit">Search!</button>
            </form>
        </>
    );
};

export default StarshipSearch;