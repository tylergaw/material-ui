import React from 'react';
import Checkbox from 'material-ui/lib/checkbox';

const CheckboxExample = React.createClass({
  getInitialState() {
    return {
      foo: 'buzz',
    };
  },

  _handleOnCheck() {
    // NOTE: If you do not call setState here, the checkbox will toggle normally
    this.setState({
      foo: 'boats',
    });
  },

  render() {
    return (
      <div>
        <Checkbox
          label="My Checkbox"
          onCheck={this._handleOnCheck} />
      </div>
    );
  },
});

export default CheckboxExample;
