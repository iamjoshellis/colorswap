import color from 'css-color-converter';

import * as types from '../constants/actionTypes';
import { addHash, checkValidHex } from '../helpers/helpers';

export const addSwatch = () => ({ type: types.ADD_SWATCH });

export const deleteSwatch = id => ({ type: types.DELETE_SWATCH, id });

export const editSwatchRGB = (id, value) => {
  const rgbArray = value
    .split(/[\s,]+/)
    .filter(item => item.match(/[\d?.]/g))
    .map(item => item.match(/[\d?.]/g)
    .join(''),
  );
  const rgbValue = value;
  let hexValue = '';
  if (rgbArray.length === 3) {
    hexValue = color().fromRgb(rgbArray).toHexString();
  } else if (rgbArray.length === 4) {
    hexValue = color().fromRgba(rgbArray).toHexString();
  }
  return { type: types.EDIT_SWATCH_RGB, id, rgbValue, hexValue };
};

export const editSwatchHex = (id, value) => {
  const hashedHex = addHash(value);
  const hexValue = value;
  let rgbValue = '';
  if (hashedHex && checkValidHex(hashedHex)) {
    rgbValue = color(hashedHex).toRgbString();
  }
  return { type: types.EDIT_SWATCH_HEX, id, rgbValue, hexValue };
};
