import React    from 'react';
import {render} from 'react-dom';
import App      from './App';

// const initCamera = require('./camera');

render(
  <App />,
  document.getElementById('root')
);
//
// initCamera()
//   .then(() => {
//     console.warn('cam init. app init ...');
//     render(
//       <App />,
//       document.getElementById('root')
//     );
//   });
