const baseUrl = 'https://api.themoviedb.org/3';

//check api from tmdb
// function isV3Key(token){
//     return /^0-9a-f]{32}$/.test(token);
// }


async function request(path){
    const token = import.meta.env.VITE_TMDB_API_KEY;
    if(!token){
        throw new Error('TMDB API key is missing');
    }

    const url = `${baseUrl}${path}${path.includes("?") ? "&" : "?"}api_key=${token}`;
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


//popular movies on home page
export function getPopularMovies(){
    return request('/movie/popular?language=en-US&page=1');
}

//tmdb return image path -> full image URL
export function getImageUrl(path, size = 'w500'){
    return path ? `https://image.tmdb.org/t/p/${size}${path}` : "";
}

//to show movies detail
export function getMovieDetails(movieID){
    return request(`/movie/${movieID}?language=en-US`);
}

//search movie by title
export function searchMovies(query){
    return request(`/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1&include_adult=false`);
}