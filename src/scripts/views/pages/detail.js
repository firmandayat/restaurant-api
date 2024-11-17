import CONFIG from '../../globals/config';
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
          <h2>Add Your Review</h2>
          <div style="display:flex; justify-content:center"> 
            <form id="reviewForm">
            <label for="name">Nama</label><br>
              <input type="text" id="reviewName" placeholder="Your Name" required><br><br>
            <label for="review">Review</label><br>
              <textarea id="reviewText" placeholder="Your Review" required></textarea><br><br>
              <button type="submit">Submit Review</button><br>
            </form>
          </div>
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

  _initReviewForm(restaurantId) {
    const reviewForm = document.getElementById('reviewForm');
    reviewForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('reviewName');
      const reviewInput = document.getElementById('reviewText');
      const name = nameInput.value;
      const review = reviewInput.value;

      try {
        const response = await fetch(`${CONFIG.BASE_URL}/review`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: restaurantId,
            name,
            review,
          }),
        });

        const responseJson = await response.json();

        if (responseJson.error === false) {
          alert('Thanks! Review berhasil');
          this._updateReviews(responseJson.customerReviews);
          nameInput.value = '';
          reviewInput.value = '';
        } else {
          alert('Gagal review');
        }
      } catch (error) {
        console.error('Error posting review:', error);
        alert('Gagal review. Periksa koneksi internet Anda');
      }

      this._initReviewForm(restaurantId);
    });
  },

  _updateReviews(customerReviews) {
    const reviewsContainer = document.querySelector('#restaurant');
    reviewsContainer.innerHTML = customerReviews
      .map(
        (review) => `
      <li>
        <p class="review-name">${review.name}</p>
        <p class="review-date">${review.date}</p>
        <p class="review-text">${review.review}</p>
      </li>
    `
      )
      .join('');
  },
};

export default Detail;
