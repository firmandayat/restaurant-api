import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
const createLikeButtonPresenterWithResto = async (restos) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restos,
  });
};
export { createLikeButtonPresenterWithResto };
