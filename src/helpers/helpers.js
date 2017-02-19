export const addHash = (hexColor) => {
  if (hexColor) {
    return hexColor.includes('#') ? hexColor : `#${hexColor}`;
  }
}

export const checkValidHex = (hexColor) => {
  const hashedHex = addHash(hexColor);
  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hashedHex)
}
