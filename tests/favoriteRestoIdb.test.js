import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestoContract';
import FavoriteResto from '../src/scripts/data/favorite-resto';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteResto.getAllResto()).forEach(async (restos) => {
      await FavoriteResto.deleteResto(restos.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteResto);
});
