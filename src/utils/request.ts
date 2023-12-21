const api_key = import.meta.env.API_KEY;

export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${api_key}&language=fr-FR`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${api_key}&language=fr-FR`,
  },
  fetchActionMovies: {
    title: 'Action Movies',
    url: `/discover/movie?api_key=${api_key}&language=fr-FR&with_genres=28`,
  },
  fetchComedyMovies: {
    title: 'Comedy Movies',
    url: `/discover/movie?api_key=${api_key}&language=fr-FR&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: 'Horror Movies',
    url: `/discover/movie?api_key=${api_key}&language=fr-FR&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: 'Romance Movies',
    url: `/discover/movie?api_key=${api_key}&language=fr-FR&with_genres=10749`,
  },
  fetchMystery: {
    title: 'Mystery',
    url: `/discover/movie?api_key=${api_key}&language=fr-FR&with_genres=9648`,
  },
  fetchSciFi: {
    title: 'SciFi',
    url: `/discover/movie?api_key=${api_key}&language=fr-FR&with_genres=878`,
  },
  fetchWestern: {
    title: 'Western',
    url: `/discover/movie?api_key=${api_key}&language=fr-FR&with_genres=37`,
  },
  fetchAnimation: {
    title: 'Animation',
    url: `/discover/movie?api_key=${api_key}&language=fr-FR&with_genres=16`,
  },
  fetchTV: {
    title: 'TV',
    url: `/discover/movie?api_key=${api_key}&language=fr-FR&with_genres=10770`,
  },
}