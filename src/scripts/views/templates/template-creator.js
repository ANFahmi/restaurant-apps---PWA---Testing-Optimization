import CONFIG from '../../globals/config';

const createMovieDetailTemplate = (restaurants) => `
  <h2 class="resto__title">${restaurants.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}"/>
  <div class="resto__info">
  <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurants.city}</p>
    <h4>Address</h4>
    <p>${restaurants.address} minutes</p>
    <h4>Rating</h4>
    <p>${restaurants.rating}</p>
    <h4>Categories</h4>
    <p>${restaurants.categories
    .map((category) => `
        <li>${category.name}</li>
    `).join('')}</p>
    <h4>Menu</h4>
    <h5>Food</h5>
    <h6>${restaurants.menus.foods
    .map((food) => `
        <li>${food.name}</li>
      `).join('')}</h6><br>
    <h5>Drink</h5>
    <h6>${restaurants.menus.drinks
    .map((drink) => `
          <li>${drink.name}</li>
        `).join('')}</h6><br>
    <h4>customerReviews</h4>
    <p>${restaurants.customerReviews
    .map((review) => `
          <p> Nama &nbsp &nbsp &nbsp: ${review.name}</p>
          <p> Tanggal &nbsp: ${review.date}</p>
          <p> Review &nbsp &nbsp: ${review.review}</p>
      `).join('')}</p>

  </div>
  <div class="resto__overview">
    <h3>Overview</h3>
    <p>${restaurants.description}</p>
  </div>
`;

const createMovieItemTemplate = (restaurants) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster lazyload" alt="${restaurants.name}"
           data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${restaurants.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3 class="resto__title"><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h3>
      <p>${restaurants.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMovieItemTemplate,
  createMovieDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
