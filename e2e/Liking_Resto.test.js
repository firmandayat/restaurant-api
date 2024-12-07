// const assert = require('assert');

// Feature('Liking Resto');

// Before(({ I }) => {
//   I.amOnPage('/#/favorite');
// });

// // Scenario('showing empty favorite resto', ({ I }) => {
//   //   I.see('Tidak ada resto favorite untuk ditampilkan', '.empty-message');
//   // });
  
//   // Menambahkan skenario favorite restaurant
// Scenario('liking one resto', async ({ I }) => {
//   I.see('Tidak ada resto favorite untuk ditampilkan', '.empty-message');
//   I.amOnPage('/');

//   // Melihat restaurant dan mengklik untuk detail
//   I.seeElement('#button');
//   const firstResto = (locate('#button').first());
//   const firstRestoTitle = await I.grabTextFrom('.resto__title');
//   I.click(firstResto);

//   // Melihat tombol like dan mengkliknya
//   I.seeElement('#likeButton');
//   I.click('#likeButton');

//   // Pergi ke halaman favorite
//   I.amOnPage('/#/favorite');
//   I.seeElement('.card');

//   // verif like resto
//   const likedRestoTitle = await I.grabTextFrom('.resto__title');
//   assert.strictEqual(firstRestoTitle, likedRestoTitle);
// });
