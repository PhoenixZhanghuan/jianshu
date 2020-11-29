import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import { List, Topic, Recommend, Writter } from "./component";
import {actionCreators} from './store';
import { connect } from "react-redux";

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        className="banner-img"
                        alt=""
                        src="https://img3.mukewang.com/5fbb1c720001b5a317920764.jpg"
                    />
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

    componentDidMount() {
        this.props.changeHomeData();
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
});

export default connect(null, mapDispatch)(Home);
