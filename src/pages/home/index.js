import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import {List, Topic, Recommend, Writter} from "./component";

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" alt="" src="https://img3.mukewang.com/5fbb1c720001b5a317920764.jpg" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writter />
                </HomeRight>
            </HomeWrapper>
        );
    }
}

export default Home;
