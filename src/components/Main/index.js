import React, { Component } from 'react';

import Wrap from './Wrap';
import Swatch from '../Swatch';

export default class Main extends Component {
  componentDidUpdate(prevProps) {
    if(prevProps.swatches.length !== this.props.swatches.length) {
      this.wrap.scrollTop = this.wrap.scrollHeight;
    }
  }

  render() {
    const { swatches, actions } = this.props;

    return(
      <Wrap innerRef={(c) => { this.wrap = c; }}>
        {swatches.map((swatch, index) =>
          <Swatch
            key={index}
            actions={actions}
            swatch={swatch}
          />,
        )}
      </Wrap>
    );
  }

}
