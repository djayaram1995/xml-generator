import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      url: ""
    }
  }
  urlChange(state, e) {
    this.setState({
      [state]: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <label htmlFor="url">URL: </label>
        <input name="url "type="text" value={this.state.url} onChange={e => this.urlChange("url", e)} />
        <label htmlFor="parent">parent: </label>
        <input name="parent "type="text" value={this.state.parent} onChange={e => this.urlChange("parent",e)} />
      </div>
    );
  }
  
}

export default App;
