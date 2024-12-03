import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
// import FavoriteResto from '../../src/scripts/data/favorite-resto';

const createLikeButtonPresenterWithResto = async (restos) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    // favoriteResto: FavoriteResto,
    restos,
  });
};
export { createLikeButtonPresenterWithResto };
