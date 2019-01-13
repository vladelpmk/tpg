import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import Nav from 'components/Nav/';
import Footer from 'components/Footer/';
import Routs from 'Routs/';
import store, { history } from 'store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <>
            <Nav />
            <div className="container">
              <div className="row">
                <Routs />
              </div>
            </div>
            <Footer />
          </>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
