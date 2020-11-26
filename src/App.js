import React from 'react';
import {Provider} from 'react-redux';
import Header from "./common/header";
import store from './store';
import { GlobalStyle } from './style';
import {GlobalStyle2} from './statics/iconfont/iconfont';

function App() {
  return (
      <Provider store={store}>
          <Header />
          <GlobalStyle/>
          <GlobalStyle2/>
      </Provider>
  );
}

export default App;
