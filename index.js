// Unminified JS. You're allowed to be a touch inefficient when you don't load in all of JQuery.

// Variable declaration
var banner = document.querySelector("#banner");
var bannerStem = document.querySelector("#stem");
var bannerBar = document.querySelector("#bar")
var navigation = document.querySelector("#navigation");
var footer = document.querySelector("#footer");
var footerBanner = document.querySelector("#footer_banner");
var footerBannerContent = document.querySelector("#footer_banner > div");

window.onscroll = function (event) {
  // Manage scrolling
  var y = window.scrollY > 0 ? window.scrollY : 0;
  var pageHeight = document.body.offsetHeight - window.innerHeight;
  if (y > pageHeight) { y = pageHeight; }

  // Scroll header
  if (y < 190) {
    var w = y < 30 ? ((30 - y) / 3) : 0;
    // Animate banner
    banner.style.visibility = 'visible';
    banner.style.height = (200 - y) + 'px';
    bannerStem.style.borderLeftWidth = w + 'px';
    bannerStem.style.borderRightWidth = w + 'px';
    bannerBar.style.borderTopWidth = 2 * w + 'px';

    // Handle navigation location
    navigation.style.position = 'absolute';
    navigation.style.top = '190px';
  } else {
    // Hide Banner
    banner.style.visibility = 'hidden';

    // Fix navigation
    navigation.style.position = 'fixed';
    navigation.style.top = '0px';
  }

  // Scroll footer
  if (pageHeight - y < 220) {
    var h = (200 - (pageHeight - y)) > 0 ? (200 - (pageHeight -y)) : 0;
    // Animate footer
    footer.style.visibility = 'visible';
    footerBanner.style.height = h + 'px';
    footerBannerContent.style.top = (y - pageHeight) + 'px';
  } else {
    // Hide footer
    footer.style.visibility = 'hidden';
  }
};
