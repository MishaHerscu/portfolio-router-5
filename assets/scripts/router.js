'use strict';

const Router5 = require('router5');

const routes = [
  { name: 'oneSection', path: '/oneSection' },
  { name: 'twoSection', path: '/twoSection' },
  { name: 'threeSection', path: '/threeSection' },
  { name: 'fourSection', path: '/fourSection' },
];

const options = {
  useHash: true,
  hashPrefix: '!',
  defaultRoute: 'home',
  defaultParams: {},
  base: '',
  trailingSlash: false,
  autoCleanUp: true,
  strictQueryParams: true
};

const router = new Router5(routes, options);

// const paths = [
//   '#about',
//   '#work',
//   '#contact',
// ];
//
// const hideAllContent = () => {
//   paths.forEach((path) => {
//     $(`${path}`).addClass('hidden');
//   });
// };
//
// const showContent = (path) => {
//   $(`${path}`).removeClass('hidden');
// };
//
// const registerPaths = () => {
//   paths.forEach((path) => {
//     $(`a[href="${path}"]`).on('click', (event) => {
//     event.preventDefault();
//     hideAllContent();
//     showContent(path);
//     });
//   });
// };
//
// $(() => {
//   registerPaths();
// });
//
// $('a[href="#about"]').on('click', (event) => {
//   event.preventDefault();
//   $('#about').toggleClass('hidden');
// });
//
// $('a[href="#work"]').on('click', (event) => {
//   event.preventDefault();
//   $('#work').toggleClass('hidden');
// });
//
// $('a[href="#contact"]').on('click', (event) => {
//   event.preventDefault();
//   $('#contact').toggleClass('hidden');
// });

module.exports = true;
