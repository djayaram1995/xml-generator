import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      parent: "",
      childs: []
    };
  }
  urlChange = e => {
    this.facilitator("url", e);
  };
  parentTag = e => {
    this.facilitator("parent", e);
  };
  facilitator = (state, e) => {
    this.setState({
        [state]: e.target.value
      })
    
  };
  addChild = () => {
    this.setState({
      childs: [...this.state.childs, {}]
    });
  };
  addChildFinal = (e, i) => {
    let childs = this.state.childs;
    childs[i].name = e.target.value;
    this.setState({ childs });
  };
  generateXml = () => {
    let childs = "";
    this.state.childs.map(child => {
      childs = childs+`<${child.name}></${child.name}>`
      return null;
    })
    let xml = `<${this.state.parent}>
    ${childs}
    </${this.state.parent}>`
    console.log(xml);
  };
  render() {
    return (
      <div className="App">
        <label htmlFor="url">URL: </label>
        <input
          name="url "
          type="text"
          value={this.state.url}
          onChange={this.urlChange}
        />
        <div>
          <label htmlFor="parent">parent: </label>
          <input
            name="parent "
            type="text"
            value={this.state.parent}
            onChange={this.parentTag}
          />
          <button name="addChild" onClick={this.addChild}>
            ADD CHILD
          </button>
        </div>
        <div>
          {this.state.childs.map((child, index) => {
            return (
              <div key={index}>
                <label htmlFor={`child${index + 1}`}>{`child${index +
                  1} :`}</label>
                <input
                  type="text"
                  onChange={e => {
                    this.addChildFinal(e, index);
                  }}
                />
              </div>
            );
          })}
        </div>
        <div>
          <button onClick={this.generateXml}>GERNERATE XML</button>
        </div>
      </div>
    );
  }
}

export default App;
