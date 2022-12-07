/* eslint-disable no-new */
/* eslint-disable eol-last */
import FavoriteMovieIdb from '../../data/favorite-resto-idb';
import FavoriteMovieSearchView from './liked-resto/favorite-movie-search-view';
import FavoriteMovieShowPresenter from './liked-resto/favorite-movie-show-presenter';
import FavoriteMovieSearchPresenter from './liked-resto/favorite-movie-search-presenter';

const view = new FavoriteMovieSearchView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteMovieShowPresenter({ view, favoriteMovies: FavoriteMovieIdb });
    new FavoriteMovieSearchPresenter({ view, favoriteMovies: FavoriteMovieIdb });
  },
};

export default Like;