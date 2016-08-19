import React, {Component} from 'react';
import Sheet from './sheet';
import Placement from './placement';
import data from './data';

console.log('data', data)
export default class App extends Component {
  constructor() {
    super();
    const width = 2554;
    const height = 1898;


  }



  _createPlacements() {

  }

  _createSheets() {

  }

  render() {
    return (
      <div>
        { data.map((sheet, index) =>
            <Sheet data={sheet} key={index} />
        )}
        <Placement foo={15} />
      </div>
    );
  }
}
