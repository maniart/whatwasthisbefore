import React, {Component} from 'react';
import Placement          from './placement';

const width   = 2554;
const height  = 1898;

export default class Sheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placements: props.data.slice(0),
      swapSrc: ''
    };
    this.setBgColor(props.config.background);
    this.counter = 0;
    this.swapSrcIndex = 0;
    this.mouseEntered = this.mouseEntered.bind(this);
  }

  setBgColor(color) {
    if(this.props.config.active) {
      document.body.style.backgroundColor = color;
    }
  }

  componentDidMount() {
    
  }

  mouseEntered() {
    this.counter ++;
    const index = this.counter % this.state.placements.length;
    if (index === this.state.placements.length - 1) {
      this.swapSrcIndex = this.swapSrcIndex === this.state.placements.length - 1
        ? 0
        : this.swapSrcIndex + 1;
        console.log('this.swapSrcIndex = ', this.swapSrcIndex);
    }
    this.setState({
      swapSrc: this.state.placements[this.swapSrcIndex].src
    });
  }

  render() {
    return (
      <div style={{
        display: this.props.config.active ? 'block' : 'none',
        position: 'absolute',
        width: `${width * this.props.scale}px`,
        height: `${height * this.props.scale}px`,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
        {this.state.placements.map((spec, index) =>
          <Placement
            {...spec}
            scale={this.props.scale}
            mouseEntered={this.mouseEntered}
            swap={this.state.swapSrc}
            key={index} />
        )}
      </div>
    )
  }
}
