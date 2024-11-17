import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/resto-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
          <h2 style="margin-top:100px">Detail Page</h2>
          <div id="restaurant" class="wrapper-detail"></div>
          <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restos = await RestoSource.detailRestaurant(url.id);
    console.log(restos);
    const restoContainer = document.querySelector('#restaurant');
    restoContainer.innerHTML = createRestoDetailTemplate(restos);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restos: {
        id: restos.id,
        pictureId: restos.pictureId,
        name: restos.name,
        city: restos.city,
        rating: restos.rating,
      },
    });

  },
};

export default Detail;
