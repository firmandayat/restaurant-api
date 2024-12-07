// Feature('Unliking Resto');

// Before(({ I }) => {
//   I.amOnPage('/#/favorite');
// });

// // unlike resto
// Scenario('unliking resto', ({ I }) => {
//   I.see('Tidak ada resto favorite untuk ditampilkan', '.empty-message');
//   I.amOnPage('/');

//   // Melihat restaurant dan mengklik untuk detail
//   I.seeElement('#button');
//   I.click('#button');

//   // like resto
//   I.seeElement('#likeButton');
//   I.click('#likeButton');

//   // Pergi ke halaman favorite dan klik detail
//   I.amOnPage('/#/favorite');
//   I.seeElement('#button');
//   I.click('#button');

//   // unlike resto
//   I.seeElement('#likeButton');
//   I.click('#likeButton');

//   // Pergi ke halaman favorite dan menampilkan Tidak ada resto favorite untuk ditampilkan
//   I.amOnPage('/#/favorite');
//   I.see('Tidak ada resto favorite untuk ditampilkan', '.empty-message');
// });
