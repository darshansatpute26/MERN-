import React, { useState, useEffect } from 'react';
import './Comp2.css';

function Comp2() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/getmoviesdata') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch movie data');
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data); 
        setLoading(false); 
      })
      .catch((err) => {
        setError(err.message); 
        setLoading(false); 
      });
  }, []); 


  if (loading) {
    return <div>Loading movies...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h2>Movie List</h2>
      {movies.length === 0 ? (
        <p>No movies available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Hero</th>
              <th>Heroine</th>
              <th>Year</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td>{movie.movie_name}</td>
                <td>{movie.hero}</td>
                <td>{movie.heroine}</td>
                <td>{movie.release_year}</td>
                <td>{movie.genre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Comp2;
