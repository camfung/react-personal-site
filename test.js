const axios = require('axios');

// Replace 'YOUR_API_KEY' with your actual TMDb API key
const apiKey = '864632de54f4f7d85f36889625740cb0';
const baseUrl = 'https://api.themoviedb.org/3';
const movieTitle = 'Anyone but you';

async function getMovieImage(title) {
    try {
        // Search for movies by title
        const searchResponse = await axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(title)}`);
        const movies = searchResponse.data.results;
        if (movies.length === 0) {
            console.log('No movies found.');
            return;
        }

        // Assuming the first result is the desired one
        const movieId = movies[0].id;
        const movieDetailsResponse = await axios.get(`${baseUrl}/movie/${movieId}?api_key=${apiKey}`);
        const movieDetails = movieDetailsResponse.data;

        // Construct image URL (you might need to handle different sizes or use a default image if not available)
        const imageUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
        console.log(`Image URL for movie '${title}': ${imageUrl}`);
    } catch (error) {
        console.error('Error fetching movie data:', error.message);
    }
}

getMovieImage(movieTitle);
