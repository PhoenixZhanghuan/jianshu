import React from "react";
import { Provider } from "react-redux";
import Header from "./common/header";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from './pages/login';
import Write from './pages/write';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={Home}></Route>
                <Route path="/write" exact component={Write}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/detail/:id" exact component={Detail}></Route>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
