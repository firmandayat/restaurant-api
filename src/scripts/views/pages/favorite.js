import FavoriteResto from '../../data/favorite-resto';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
          <div style="min-height:100vh">
          <h2 style="margin-top:100px">Favorite Page</h2>
          <div id="restaurant" class="wrapper-favorite"></div>
          </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restos = await FavoriteResto.getAllResto();
    const restosContainer = document.querySelector('#restaurant');

    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });

    console.log('Favorite page rendered');
  },
};

export default Favorite;
