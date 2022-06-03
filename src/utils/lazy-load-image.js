const lazyLoadImage = (callback) => {
  document
    .querySelectorAll('img')
    .forEach((img) => img.addEventListener('load', () => callback()));
};

export default lazyLoadImage;
