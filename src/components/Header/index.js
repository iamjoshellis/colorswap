import React from 'react';

import Wrap from './Wrap';
import Labels from './Labels';

const Header = ({addSwatch}) => (
  <Wrap>
    <Labels>
      <span>RGB</span>
      <span>HEX</span>
    </Labels>
    <button onClick={addSwatch}>+</button>
  </Wrap>
);

export default Header;
