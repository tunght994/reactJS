const API_KEY = '14a1f0873da06eac8ea9d01b5d8b8fc0';

const requests = {
    fetchTreding: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetFlixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorroMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests

// https://api.themoviedb.org/3/discover/movie?api_key=14a1f0873da06eac8ea9d01b5d8b8fc0&with_genres=35