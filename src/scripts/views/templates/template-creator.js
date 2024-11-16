import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
        <div class="card">
            <img src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : `https://restaurant-api.dicoding.dev/images/small/${resto.pictureId}`}" alt="${resto.name}">
            <div class="container">
                <h4><b>${resto.name}</b></h4>
                <p><strong>Kota:</strong> ${resto.city}</p>
                <p><strong>Rating:</strong> ${resto.rating}</p>
                <a href="/#/detail/${resto.id}"><button>Detail</button></a>
            </div>
        </div>
`;

const createRestoDetailTemplate = (resto) => `
        <div class="card">
            <img src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : `https://restaurant-api.dicoding.dev/images/small/${resto.pictureId}`}" alt="${resto.name}">
            <div class="container">
                <h4><b>${resto.name}</b></h4>
                <p><strong>Deskripsi:</strong> ${resto.description}</p>
                <p><strong>Kota:</strong> ${resto.city}</p>
                <p><strong>Alamat:</strong> ${resto.address}</p>
                <p><strong>Rating:</strong> ${resto.rating}</p>
                <button>Detail</button>
            </div>
        </div>
`;

export { createRestoItemTemplate, createRestoDetailTemplate };
