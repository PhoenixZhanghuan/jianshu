import React, {Fragment} from 'react';
import Header from "./common/header";
import { GlobalStyle } from './style';
import {GlobalStyle2} from './statics/iconfont/iconfont';

function App() {
  return (
      <Fragment>
          <Header />
          <GlobalStyle/>
          <GlobalStyle2/>
      </Fragment>
  );
}

export default App;
