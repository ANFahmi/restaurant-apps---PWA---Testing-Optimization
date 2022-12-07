/* eslint-disable eol-last */
const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#favorite');
  // I.seeElement('.query'); // membuat test menjadi gagal
  I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.resto__title a');

  const firstResto = locate('.resto__title a').first();
  const firstLikeResto = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.resto-item');
  const likedRestoTitle = await I.grabTextFrom('.resto__title');

  assert.strictEqual(firstLikeResto, likedRestoTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.resto-item__not__found');
  I.amOnPage('/');
  I.waitForElement('.resto__title a');

  const firstResto = locate('.resto__title a').first();
  I.click(firstResto);

  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');

  I.seeElement('.resto-item');
  const UnlikedRestoTitle = await I.grabTextFrom('.resto__title');
  I.click(UnlikedRestoTitle);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('#favorite');
  I.dontSeeElement('.resto-item');
  I.dontSeeElement('.resto__title');
});