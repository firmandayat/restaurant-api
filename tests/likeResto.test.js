import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteResto from '../src/scripts/data/favorite-resto';

describe('Liking A Resto', () => {
  it('should show the like button when the resto has not been liked before', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';

    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restos: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="like this resto"]')
    ).toBeTruthy();
  });
  
   it('should not show the unlike button when the resto has not been liked before', async () => {
     document.body.innerHTML = '<div id="likeButtonContainer"></div>';
     await LikeButtonInitiator.init({
       likeButtonContainer: document.querySelector('#likeButtonContainer'),
       restos: {
         id: 1,
       },
     });

     expect(
       document.querySelector('[aria-label="unlike this resto"]')
     ).toBeFalsy();
   });

    it('should be able to like the resto', async () => {
      document.body.innerHTML = '<div id="likeButtonContainer"></div>';
      await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restos: {
          id: 1,
        },
      });
      
      document.querySelector('#likeButton').dispatchEvent(new Event('click'));
      const resto = await FavoriteResto.getResto(1);
      expect(resto).toEqual({ id: 1 });
      await FavoriteResto.deleteResto(1);

    });

});