import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import { List, Topic, Recommend, Writter } from "./component";
import axios from "axios";
import {connect} from 'react-redux';

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
        axios
            .get("/api/home.json")
            .then((res) => {
                const result = res.data.data;
                const action = {
                    type: 'change_home_data',
                    topicList: result.topicList,
                    articleList: result.articleList,
                    recommendList: result.recommendList
                }
                this.props.changeHomeData(action);
            })
            .catch(() => {});
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData(action) {
        dispatch(action);
    }
});

export default connect(null, mapDispatch)(Home);
