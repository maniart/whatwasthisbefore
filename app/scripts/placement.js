import React from 'react';

const Placement = ({
  width,
  height,
  top,
  left,
  src,
  swap,
  scale,
  mouseEntered = () => {}
}) =>
  <div
    onMouseEnter={(e)=> {
      e.target.style.backgroundImage = `url('${swap}')`;
      mouseEntered();
    }}
    style={{
      width: `${width * scale}px`,
      height: `${height * scale}px`,
      backgroundImage: `url('${src}')`,
      backgroundSize: 'cover',
      position: 'absolute',
      top: `${top * scale}px`,
      left: `${left * scale}px`
  }}>
  </div>;

export default Placement;
