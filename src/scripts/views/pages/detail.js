/* eslint-disable eol-last */
import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/therestodb-source';
import { createMovieDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="detail" class="resto"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheMovieDbSource.detailMovie(url.id);
    const movieContainer = document.querySelector('#detail');
    movieContainer.innerHTML = createMovieDetailTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto,
    });
  },
};

export default Detail;