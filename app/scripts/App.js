import React  from 'react';
import Sheet  from './sheet';
import data   from './data';
const scale = 0.3;
const App = () =>
  <div
    style={{
      minWidth: '100%',
      minHeight: '100%'
    }}>
    {data.map(({collection, config}, index) =>
      <Sheet
        scale={scale}
        data={collection}
        config={config}
        key={index} />
    )}
  </div>;

export default App;
