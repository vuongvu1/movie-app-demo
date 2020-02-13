import {IMAGE_API} from './apis';

export const getImageUrl = ({fileName, size}) =>
  `${IMAGE_API}/${size}${fileName}`;
