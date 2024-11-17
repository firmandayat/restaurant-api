// /* eslint-disable no-undef */
import RestoSource from '../../data/resto-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section id="Home">
            <img class="bg-banner" src="./images/heros/hero-image_4.jpg" alt="Hero Image" />
        </section>
        <div class="container">
            <section class="description">
                <h2 tabindex="0">
                    Description
                </h2>
                <div id="mainContent" class="content">
                    <article>
                        <p tabindex="0" class="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                            tempore atque reprehenderit,
                            ratione, illo
                            neque est perspiciatis itaque temporibus ipsam dignissimos adipisci. Eius alias eligendi
                            laborum facilis
                            ipsam
                            repellat, ipsa quasi voluptatum, esse iure ut recusandae obcaecati nemo quibusdam quod
                            libero? Quam vitae
                            unde, nostrum id quis odio nobis nisi consequuntur debitis? In architecto molestiae ipsa
                            cumque laboriosam
                            totam, quod quibusdam laudantium corporis dolore quia obcaecati corrupti magni? Laudantium
                            quaerat iste
                            dignissimos in repellendus est optio sed labore. Ratione, praesentium. Quam vitae
                            unde, nostrum id quis odio nobis nisi consequuntur debitis? In architecto molestiae ipsa
                            cumque laboriosam
                            totam, quod quibusdam laudantium corporis dolore quia obcaecati corrupti magni? Laudantium
                            quaerat iste
                            dignissimos in repellendus est optio sed labore. Ratione, praesentium.</p>
                    </article>
                </div>
            </section>
          <h2 style="margin-top:50px">Restaurants</h2>
          <div id="restaurant" class="wrapper-resto"></div>
          <section id="Contact Us" class="contact-us">
            <h2 tabindex="0">Contact Us</h2>
            <p tabindex="0" class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sapiente
                quod amet cumque,
                voluptatibus
                earum tenetur unde eveniet quas, itaque iure culpa ex quidem commodi aperiam corrupti dolore alias
                ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sapiente
                quod amet cumque,
                voluptatibus
                earum tenetur unde eveniet quas, itaque iure culpa ex quidem commodi aperiam corrupti dolore alias
                ducimus? 
            </p>
            <div class="sosmed">
                <a href="https://www.instagram.com/firmandyt/" target="_blank"><img src="./images/logos/ig.png"
                        width="45px" alt="Instagram Logo"></a>
                <a href="https://www.linkedin.com/in/firmanhidayatullah//" target="_blank"><img
                        src="./images/logos/linkedin.png" width="45px" alt="Linkedin Logo"></a>
                <a href="https://mailto:firman.txt@gmail.com" target="_blank"><img src="./images/logos/gm.png"
                        width="45px" alt="Gmail Logo"></a>
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
