import React from 'react';

const Placement = ({
  width,
  height,
  top,
  left,
  src
}) =>
  <div
    style={{
      width: `${width}px`,
      height: `${height}px`,
      backgroundImage: `url('${src}')`,
      backgroundSize: 'cover',
      position: 'absolute',
      top: `${top}px`,
      left: `${left}px`
  }}>
  </div>;

export default Placement;
