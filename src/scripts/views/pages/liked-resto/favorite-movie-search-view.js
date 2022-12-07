/* eslint-disable class-methods-use-this */
import { createMovieItemTemplate } from '../../templates/template-creator';

class FavoriteMovieSearchView {
  getTemplate() {
    return `
      <div class="content">
      <h2 class="content__heading">Your Liked Resto</h2>
        <div id="favorite" class="movies">
        </div>
      </div>
   `;
  }

  showMovies(movies) {
    this.showFavoriteMovies(movies);
  }

  showFavoriteMovies(movies = []) {
    let html;
    if (movies.length) {
      html = movies.reduce((carry, movie) => carry.concat(createMovieItemTemplate(movie)), '');
    } else {
      html = this._getEmptyRestoTemplate();
    }

    document.getElementById('favorite').innerHTML = html;

    document.getElementById('favorite').dispatchEvent(new Event('favorite:updated'));
  }

  _getEmptyRestoTemplate() {
    return '<div class="resto-item__not__found resto__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteMovieSearchView;
