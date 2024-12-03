import FavoriteResto from '../data/favorite-resto';
import {
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, restos }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restos = restos;
    this._favoriteResto = FavoriteResto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restos;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const restos = await this._favoriteResto.getResto(id);
    return !!restos;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.putResto(this._restos);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestoButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.deleteResto(this._restos.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
