// /* eslint-disable no-undef */
import RestoSource from '../../data/resto-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section id="Home">
        <picture>
          <source type="image/webp" media="(max-width: 600px)" srcset="./images/heros/hero-image-small.webp">
          <img type="image/webp" class="bg-banner" src="./images/heros/hero-image-large.webp" alt="Hero Image">
        </picture>
        <h1 class="tagline">Hidangan Istimewa <br>Dibuat dengan <span style="color:#d2e3c8">Cinta</span></h1>
        </section>
        <div class="container">
            <section class="description">
                <h2 tabindex="0">
                    The Tasty
                </h2>
                <div id="mainContent" class="content">
                    <article>
                        <p tabindex="0" class="text">Berawal dari sebuah warung kecil di sudut kota, kami berkembang menjadi restoran ternama yang dikenal karena kualitas rasa dan pelayanan terbaik. Rasakan perpaduan sempurna antara cita rasa lokal dan internasional yang diolah dengan bahan segar dan penuh cinta, disajikan dalam suasana hangat yang menjadikan setiap kunjungan Anda sebuah perjalanan kuliner yang tak terlupakan.</p>
                    </article>
                </div>
            </section>
          <h2 style="margin-top:50px">Restaurants List</h2>
          <div id="restaurant" class="wrapper-resto"></div>
          <section id="Contact Us" class="contact-us">
            <h2 tabindex="0">Contact Us</h2>
            <p tabindex="0" class="text">Jika Anda memiliki pertanyaan atau ingin melakukan reservasi, jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda dengan segala kebutuhan, mulai dari pemesanan meja, informasi menu, hingga acara spesial. Hubungi kami melalui email atau kunjungi kami langsung dan nikmati pengalaman kuliner terbaik bersama kami.
            </p>
            <div class="sosmed">
              <a href="mailto:firman.txt@gmail.com" target="_blank" aria-label="Email Firman">
                  <img class="lazyload" data-src="./logos/gm.png" width="45px" height="45px" alt="Gmail Logo">
              </a>
              <a href="https://www.instagram.com/firmandyt/" target="_blank" aria-label="Instagram Firman">
                  <img class="lazyload" data-src="./logos/ig.png" width="45px" height="45px" alt="Instagram Logo">
              </a>
              <a href="https://www.linkedin.com/in/firmandyt/" target="_blank" aria-label="LinkedIn Firman">
                  <img class="lazyload" data-src="./logos/linkedin.png" width="45px" height="45px" alt="LinkedIn Logo">
              </a>
            </div>
        </section>
        </div>          
        `;
  },

  async afterRender() {
    console.log('Home page rendered');
    const restos = await RestoSource.homeRestaurant();
    console.log(restos);
    const restosContainer = document.querySelector('#restaurant');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
