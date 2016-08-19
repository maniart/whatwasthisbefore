import React, {Component} from 'react';
import Placement from './placement';
const width = 2554;
const height = 1898;

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
      <div style={{
        position: 'absolute',
        width: width + 'px',
        height: height + 'px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }}>
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
