const API_KEY =process.env.REACT_APP_API_KEY;
const API_BASE = 'https://api.themoviedb.org/3';
const type = ['movie', 'tv'] 


const baseFetch = async (endpoint) =>{
    return (await fetch(`${API_BASE}${endpoint}`)).json();

} 

const Requests = {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                type: type[1],
                items: await baseFetch(`/discover/${type[1]}?with_network=213&language=pt-BR&api_key=${API_KEY}`) 
            },
            {
                slug: 'trending',
                title: 'Recomendados',
                items: await baseFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`) 
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await baseFetch(`/movie/top_rated/?language=pt-BR&api_key=${API_KEY}`) 
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await baseFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)  
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await baseFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`) 
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await baseFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`) 
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await baseFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`) 
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await baseFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`) 
            }
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};
        if(movieId){
            switch(type){
                case 'movie': 
                    info = await baseFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                case 'tv': 
                    info = await baseFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                default: 
                    info = null;
                break;
            }
        }
        return info;
    }
};

export default Requests