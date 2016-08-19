import React, {Component} from 'react';
import Sheet from './sheet';
import data from './data';

export default class App extends Component {
  constructor() {
    super();
    const width = 2554;
    const height = 1898;


  }


  render() {
    return (
      <div>
        { data.map(({collection, config}, index) =>
            <Sheet data={collection} config={config} key={index} />
        )}
      </div>
    );
  }
}
