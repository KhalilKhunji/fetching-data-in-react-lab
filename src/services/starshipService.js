const BASE_URL = "https://swapi.dev/api/starships";

const getStarship = async () => {
    try {
        const response = await fetch(BASE_URL);
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        };
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    };
};

export { getStarship };