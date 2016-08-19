import React, {Component} from 'react';
import Placement from './placement';

export default class Sheet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._setBgColor(props.config.background);
  }

  _setBgColor(color) {
    document.body.style.backgroundColor = color;
  }

  render() {
    return (
      <div>
        { this.props.data.map((placement, index) =>
          <div
            key={index}
            style={{
              width: placement.width + 'px',
              height: placement.height + 'px',
              backgroundImage: `url('${placement.src}')`,
              backgroundSize: 'cover',
              position: 'absolute',
              top: placement.top + 'px',
              left: placement.left + 'px'
          }}></div>
        )}
      </div>
    )
  }
}
