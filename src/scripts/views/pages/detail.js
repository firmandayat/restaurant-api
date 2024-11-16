import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/resto-source';
import { createRestoDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
          <h2 style="margin-top:100px">Detail Page</h2>
          <section id="Favorite" class="wrapper-detail">
          <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restos = await RestoSource.detailRestaurant(url.id);
    console.log(restos);
    const restoContainer = document.querySelector('#Favorite');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    restoContainer.innerHTML = createRestoDetailTemplate(restos);
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

  },
};

export default Detail;
