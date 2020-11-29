import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import { List, Topic, Recommend, Writter } from "./component";
import { actionCreators } from "./store";
import { connect } from "react-redux";

class Home extends Component {
    render() {
        const { showScroll } = this.props;

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
                {showScroll ? (
                    <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
                ) : null}
            </HomeWrapper>
        );
    }

    handleScrollTop = () => {
        window.scrollTo(0, 0);
    };

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }
    

    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
}



const mapState = (state) => ({
    showScroll: state.getIn(["home", "showScroll"]),
});

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
        if(document.documentElement.scrollTop > 300) {
            dispatch(actionCreators.toggleTopShow(true))
        }else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
});

export default connect(mapState, mapDispatch)(Home);
