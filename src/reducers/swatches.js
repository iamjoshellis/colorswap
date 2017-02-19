import { ADD_SWATCH, DELETE_SWATCH, EDIT_SWATCH_RGB, EDIT_SWATCH_HEX } from '../constants/actionTypes';

const initialState = [
  {
    id: 0,
    hex: '',
    rgb: '',
  },
];

const swatches = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SWATCH:
      return [
        ...state, {
          id: state.reduce((maxId, swatch) => Math.max(swatch.id, maxId), -1) + 1,
          hex: '',
          rgb: '',
        },
      ];
    case DELETE_SWATCH:
      return state.filter(swatch =>
        swatch.id !== action.id,
      );
    case EDIT_SWATCH_RGB:
      return state.map(swatch =>
        swatch.id === action.id ?
        { ...swatch, rgb: action.rgbValue, hex: action.hexValue } :
        swatch,
      );
    case EDIT_SWATCH_HEX:
      return state.map(swatch =>
          swatch.id === action.id ?
          { ...swatch, rgb: action.rgbValue, hex: action.hexValue } :
          swatch,
        );
    default:
      return state;
  }
};

export default swatches;
