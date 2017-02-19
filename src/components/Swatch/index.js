import React, { Component } from 'react';
import color from 'color';

import Input from '../Input';
import Wrap from './Wrap';
import Content from './Content';
import { addHash, checkValidHex } from '../../helpers/helpers';

export default class Swatch extends Component {
  state = { backgroundColor: '#fff', color: '#242529' }

  componentWillMount() {
    this.handleStyleChange(this.props.swatch.hex);
  }

  componentWillUpdate(nextProps) {
    if(nextProps.swatch.hex !== this.props.swatch.hex) {
      this.handleStyleChange(nextProps.swatch.hex);
    }
  }

  handleStyleChange = (hex) => {
    if(checkValidHex(hex)) {
      const hashedHex = addHash(hex);
      this.setState({
        backgroundColor: hashedHex,
        color: color(hashedHex).light() ? '#242529' : '#fff',
      })
    }
  }

  handleRGBChange = (event) => {
    const { actions: { editSwatchRGB }, swatch: { id } } = this.props;
    editSwatchRGB(id, event.target.value);
  }

  handleHexChange = (event) => {
    const { actions: { editSwatchHex }, swatch: { id } } = this.props;
    editSwatchHex(id, event.target.value);
  }

  handleDeleteSwatch = () => {
    const { actions: { deleteSwatch }, swatch: { id } } = this.props;
    deleteSwatch(id);
  }

  render() {
    const { swatch: { hex, rgb } } = this.props;
    const { backgroundColor, color } = this.state;
    const swatchStyle = { backgroundColor, color };
    return (
      <Wrap style={swatchStyle}>
        <Content>
          <div>
            <Input
              inputValue={rgb}
              inputChange={this.handleRGBChange}
              inputId="rgb-input"
              label="RGB"
            />
          </div>
          <div>
            <Input
              inputValue={hex}
              inputChange={this.handleHexChange}
              inputId="hex-input"
              label="HEX"
            />
          </div>
        </Content>
        <button onClick={this.handleDeleteSwatch}>-</button>
      </Wrap>
    );
  }
}
