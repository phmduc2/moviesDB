const baseUrl = 'https://api.themoviedb.org/3';

//check api from tmdb
function isV3Key(token){
    return /^0-9a-f]{32}$/.test(token);
}


async function request(path){
    const token = import.meta.env.VITE_TMDB_API_KEY;
    if(!token){
        throw new Error('TMDB API key is missing');
    }

    const url = `${BASE_URL}${path}${path.includes("?") ? "&" : "?"}api_key=${token}`;
    const response = await fetch(url,{
        headers: {
            accept: 'application/json',
        }
    });
    if (!response.ok){
        throw new Error(`TMDB API request failed: ${response.status}`);
    }

    return response.json();
}

