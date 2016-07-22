'use strict';

const paths = [
  '#oneSection',
  '#twoSection',
  '#threeSection',
  '#fourSection',
];

const hideAllContent = () => {
  paths.forEach(() => {
    $(`${path}`).addClass('hidden');
  });
};

const showContent = (path) => {
  $(`${path}`).removeClass('hidden');
};

paths.forEach((path) => {
  $(`a[href="${path}"]`).on('click', (event) => {
    event.preventDefault()

    hideAllContent();
    showContent(path)
  })
});

const registerPaths = () => {
  paths.forEach((path) => {
    $(`a[href="${path}"]`).on('click', handlePath);
  });
};

$(() => {
  registerPaths();
});

module.exports = true;
