import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/resto-source';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
          <h2 style="margin-top:100px">Detail Page</h2>
          <section id="Favorite" class="wrapper-favorite">
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restos = await RestoSource.detailRestaurant(url.id);
    console.log(restos);
    const restoContainer = document.querySelector('#Favorite');
    restoContainer.innerHTML = createRestoDetailTemplate(restos);
  },
};

export default Detail;
