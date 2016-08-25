import React, {Component} from 'react';
import Placement          from './placement';

const width   = 2554;
const height  = 1898;

export default class Sheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placements: props.data.slice(0),
      swapIndex: 0
    };
    console.log('state', this.state);
    this.setBgColor(props.config.background);
    this.counter = 0;
    this.count = this.count.bind(this);
  }

  setBgColor(color) {
    if(this.props.config.active) {
      document.body.style.backgroundColor = color;
    }
  }

  updatePlacement(src) {

  }

  count() {
    this.counter ++;
    console.log('count: ', this.counter);
  }

  getSwapSrc() {
    if(this.state.swapIndex ) {

    } else {

    }
    return this.state.placements[this.state.swapIndex].src;
  }

  render() {
    return (
      <div style={{
        display: this.props.config.active ? 'block' : 'none',
        position: 'absolute',
        width: `${width}px`,
        height: `${height}px`,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
        {this.state.placements.map((spec, index) =>
          <Placement
            {...spec}
            mouseEntered={this.count}
            swap={this.getSwapSrc()}
            key={index} />
        )}
      </div>
    )
  }
}
