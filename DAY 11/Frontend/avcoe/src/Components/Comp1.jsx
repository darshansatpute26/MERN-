import React, { useState } from 'react';
import axios from 'axios';


function Comp1({ addMovie }) {
  const [movieName, setMovieName] = useState('');
  const [hero, setHero] = useState('');
  const [heroine, setHeroine] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!movieName || !hero || !heroine || !year || !genre) {
      setError('All fields are required');
      return;
    }

    setError('');

    const newMovie = {
      movie_name: movieName,
      hero,
      heroine,
      release_year:year,
      genre,
    };

    try {

      const response = await axios.post('http://localhost:3000/addmoviesdata', newMovie);

      setSuccessMessage('Movie added successfully!');
      console.log(response.data);

      setMovieName('');
      setHero('');
      setHeroine('');
      setYear('');
      setGenre('');
    } catch (err) {
    
      setError('Error saving data: ' + err.message);
      console.error('Error:', err);
    }
  };

  return (
    <div className="container">
      <h2>Register a New Movie</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <label>Movie Name: </label>
        <input
          type="text"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          required
        />
        <br />
        <label>Hero: </label>
        <input
          type="text"
          value={hero}
          onChange={(e) => setHero(e.target.value)}
          required
        />
        <br />
        <label>Heroine: </label>
        <input
          type="text"
          value={heroine}
          onChange={(e) => setHeroine(e.target.value)}
          required
        />
        <br />
        <label>Year: </label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
        <br />
        <label>Genre: </label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
        <br />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default Comp1;
