import TheMovieDbSource from '../../data/therestodb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const NowPlaying = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Explore Restaurant</h2>
        <div id="home" class="movies">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.nowPlayingMovies();
    const moviesContainer = document.querySelector('.movies');
    movies.forEach((restaurants) => {
      moviesContainer.innerHTML += createMovieItemTemplate(restaurants);
    });
  },
};

export default NowPlaying;
