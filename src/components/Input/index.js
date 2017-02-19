import React, { Component } from 'react';

import Wrap from './Wrap';
import Field from './Field';
import Label from './Label';
import LabelContent from './LabelContent';

export default class Input extends Component {
  render() {
    const { inputId, inputValue, inputChange, label } = this.props;
    return (
      <Wrap>
        <Field onChange={inputChange} value={inputValue} id={inputId} />
        <Label className="input__label" htmlFor={inputId}>
          <LabelContent>{label}</LabelContent>
        </Label>
      </Wrap>
    );
  }
}
