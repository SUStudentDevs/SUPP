import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers';
import App from './App';

const ROOT_NODE = document.getElementById('root')
let store = createStore(reducers);

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

render( <Main/> , ROOT_NODE);

