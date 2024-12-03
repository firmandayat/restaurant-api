import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestoContract';

let favoriteRestos = [];

const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteRestos.find((restos) => restos.id == id);
  },

  getAllResto() {
    return favoriteRestos;
  },

  putResto(restos) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restos.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestos
    if (this.getResto(restos.id)) {
      return;
    }

    favoriteRestos.push(restos);
  },

  deleteResto(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestos = favoriteRestos.filter((restos) => restos.id != id);
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestos = [];
  });

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
