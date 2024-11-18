import FavoriteResto from '../../data/favorite-resto';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
          <div style="min-height:100vh">
          <h2 style="margin-top:120px">Favorite Page</h2>
          <p id="mainContent" class="container text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi tempore atque reprehenderit, ratione, illo neque est perspiciatis itaque temporibus ipsam dignissimos adipisci. Eius alias eligendi laborum facilis ipsam repellat, ipsa quasi voluptatum, esse iure ut recusandae obcaecati nemo quibusdam quod libero</p>
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
