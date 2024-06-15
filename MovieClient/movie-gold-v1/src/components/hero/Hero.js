import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Hero = ({ movies }) => {
  return ( 
    <div className='movie-carousel-container'>
      <Carousel>
        {movies && movies.map(movie => (
          <Paper key={movie.id}>
            <div className='movie-card-container'>
              <div className='movie-card'>
                <div className='movie-detail'>
                  <div className='movie-poster'>
                    {/* Assuming you have a poster URL in the movie movie */}
                    <img src={movie.poster} alt="" />
                  </div>
                  <div className='movie-title'>
                    <h4>{movie.title}</h4>
                    {/* Add more movie details here as needed */}
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
