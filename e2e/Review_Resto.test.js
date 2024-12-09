Feature('Review Resto');

Before(({ I }) => {
  I.amOnPage('/');
});

// review resto
Scenario('review resto', ({ I }) => {
  I.seeElement('.card');

  // Melihat restaurant dan mengklik untuk detail
  I.seeElement('#button');
  I.click('#button');

  // Pergi ke halaman favorite dan klik detail
  I.seeElement('.card-review');

  // scroll  ke form review
  I.scrollTo('#reviewForm');
  I.seeElement('#reviewForm');

  // isi nama dan ulasan
  I.fillField('#reviewName', 'Firman Hidayatullah');
  I.fillField('#reviewText', 'Restoran ini tempatnya nyaman, pelayanannya ramah dan juga hidangannya lezat');

  // klik tombol kirim ulasan
  I.seeElement('#submit-review');
  I.click('#submit-review');

  // tunggu oading selesai dan ulasan muncul di daftar ulasan
  I.waitForElement('.container', 3);
  I.see('Firman Hidayatullah', '.container');
  I.see('Restoran ini tempatnya nyaman, pelayanannya ramah dan juga hidangannya lezat', '.container');
});