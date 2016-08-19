import React, {Component} from 'react';
import Placement from './placement';

export default class Sheet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
              backgroundSize: 'cover'
          }}></div>
        )}
      </div>
    )
  }
}
