import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/';
import Details from './Details/';

export default class Router extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={Details} />
      </>
    );
  }
}
