import {IMAGE_API} from './apis';

export const getImageUrl = ({fileName, size}) =>
  `${IMAGE_API}/${size}${fileName}`;

export const debounce = (func, wait) => {
  let timeout;
  return function(...args) {
    // eslint-disable-next-line consistent-this
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
};
