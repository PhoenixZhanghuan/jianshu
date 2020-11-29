import React from "react";
import { Provider } from "react-redux";
import Header from "./common/header";
import store from "./store";
import { GlobalStyle } from "./style";
import { GlobalStyle2 } from "./statics/iconfont/iconfont";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={Home}></Route>
                <Route path="/detail" exact component={Detail}></Route>
            </BrowserRouter>
            <GlobalStyle />
            <GlobalStyle2 />
        </Provider>
    );
}

export default App;
