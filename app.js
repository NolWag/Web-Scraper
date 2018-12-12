const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://www.reddit.com/r/memes';

puppeteer
  .launch()
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then(function(html) {
    $('.media-element', html).each(function() {
      console.log($(this).attr('src'));
      return;
    });
  })
  .catch(function(err) {
    //handle error
    console.log(err);
});
