import React, {Component}  from 'react';
import Sheet  from './sheet';
import data   from './data';


const scale = 0.3;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      activeSheet: 0,
      sheets: data
    }
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        activeSheet: Math.floor(Math.random() * (data.length))
      });
      data.forEach(sheet => sheet.config.active = false);
      data[this.state.activeSheet].config.active = true;
      this.setState({
        sheets: data
      });

      // this.state.sheets.forEach(sheet => sheet.config.active = false);
      // this.state.sheets[this.state.activeSheet].config.active = true;
    }, 10000)
  }

  render() {
    console.log(this.state)
    return (
      <div
        style={{
          minWidth: '100%',
          minHeight: '100%'
        }}>
        {this.state.sheets.map(({collection, config}, index) =>
          <Sheet
            counter={this.state.counter}
            scale={scale}
            data={collection}
            config={config}
            key={index} />
        )}
      </div>
    );
  }

}

// export default App;
