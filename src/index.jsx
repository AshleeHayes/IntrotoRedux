/*
import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from './js/components/App';
import index from "./js/index";
class ExampleComponent extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        { title: "React Redux Tutorial for Beginners", id: 1 },
        { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
      ]
    };
  }
  render() {
    const { articles } = this.state;
    return (
      <div>
        <App />
        <h1>Testing</h1>
        <ul>
          {articles.map(el => (
            <li key={el.id}>{el.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<ExampleComponent />, document.getElementById("root")); */

//export default ExampleComponent;


import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './js/store';
import App from './js/components/App';

render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById("root")
);