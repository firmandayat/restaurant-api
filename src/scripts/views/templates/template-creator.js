import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
        <div class="card">
            <img class="lazyload" data-src="${
  resto.pictureId
    ? CONFIG.BASE_IMAGE_URL + resto.pictureId
    : `https://restaurant-api.dicoding.dev/images/small/${resto.pictureId}`
}" alt="${resto.name}">
            <div class="container">
                <h4 class="resto__title"><b>${resto.name}</b></h4>
                <p class="text"><strong class="title-detail"><i class="fa-solid fa-city"></i> Kota:</strong> ${
  resto.city
}</p>
                <p class="text"><strong class="title-detail"><i class="fa-solid fa-star"></i> Rating:</strong> ${
  resto.rating
}</p>
                <a href="/#/detail/${
  resto.id
}"><button id="button"><i class="fa-solid fa-circle-info"></i> Detail</button></a>
            </div>
        </div>
`;

const createRestoDetailTemplate = (resto) => `
        <div class="img-container">
            <img class="img-detail lazyload" data-src="${
  resto.pictureId
    ? CONFIG.BASE_IMAGE_URL + resto.pictureId
    : `https://restaurant-api.dicoding.dev/images/small/${resto.pictureId}`
}" alt="${resto.name}"><br>
            <div class="rating">⭐ ${resto.rating}</div>
            <div class="container">
                <h4 class="title"><b>${resto.name}</b></h4>
                <p class="text">${resto.description}</p>
                <p class="text"><strong class="title-detail"><i class="fa-solid fa-city"></i> Kota:</strong> ${
  resto.city
}</p>
                <p class="text"><strong class="title-detail"><i class="fa-solid fa-street-view"></i> Alamat:</strong> ${
  resto.address
}</p>
                
          <br><br>
          <div>
            <h2><strong><i class="fa-solid fa-plate-wheat"></i> Menu Makanan</strong></h2>
            <div class="food-container">
              ${resto.menus.foods
    .map((food) => `<div class="food">${food.name}</div>`)
    .join('')}
            </div>
          </div>

          <br><br><br>
					<h2><strong><i class="fa-solid fa-wine-glass"></i> Menu Minuman</strong></h2>
					<div class="food-container">
						${resto.menus.drinks
    .map((drink) => `<div class="food">${drink.name}</div>`)
    .join('')}
					</div>

          <br><br><br>
					<h2><strong><i class="fa-solid fa-pen"></i> Ulasan Pelanggan</strong></h2>
					<div class="card-reviewed">
          ${resto.customerReviews
    .map(
      (review) => `
						<div>
							<p class="title-detail"><strong>${review.name}</strong></p>
							<p class="text">${review.review}</p><br>
						</div>
					`
    )
    .join('')}
            </div>
            </div>
        </div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
