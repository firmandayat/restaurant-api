Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
Scenario('showing empty favorite resto', ({ I }) => {
  I.seeElement('#restaurant');
  I.see('Tidak ada resto favorite untuk ditampilkan', '.empty-message');
});