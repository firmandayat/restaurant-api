/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
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
});