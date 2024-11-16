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
                            dignissimos in repellendus est optio sed labore. Ratione, praesentium.</p>
                    </article>
                </div>
            </section>
          <h2 style="margin-top:50px">Restaurants</h2>
          <section id="Favorite" class="wrapper-favorite">
          
        `;
  },

  async afterRender() {
    console.log('Home page rendered');
    const restos = await RestoSource.homeRestaurant();
    console.log(restos);
    const restosContainer = document.querySelector('#Favorite');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
