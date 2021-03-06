import React, { PureComponent } from "react";
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
} from "./style";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Link } from "react-router-dom";
import { actionCreators as loginActionCreators } from "../../pages/login/store";
class Header extends PureComponent {
    getListArea = () => {
        const {
            focused,
            list,
            page,
            mouseIn,
            totalPage,
            handleMouseEnter,
            handleMouseLeave,
            handleChangePage,
        } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if (newList.length > 0) {
            const len = page * 10 > newList.length ? newList.length : page * 10;
            for (let i = (page - 1) * 10; i < len; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i] + i}>
                        {newList[i]}
                    </SearchInfoItem>
                );
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={() =>
                                handleChangePage(page, totalPage, this.spinIcon)
                            }
                        >
                            <i
                                ref={(icon) => {
                                    this.spinIcon = icon;
                                }}
                                className="iconfont spin"
                            >
                                &#xe709;
                            </i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>{pageList}</SearchInfoList>
                </SearchInfo>
            );
        }
    };
    render() {
        const {
            focused,
            list,
            login,
            logout,
            handleInputFocus,
            handleInputBlur,
        } = this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>

                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {login ? (
                        <NavItem onClick={logout} className="right">
                            退出
                        </NavItem>
                    ) : (
                        <Link to="/login">
                            <NavItem className="right">登录</NavItem>
                        </Link>
                    )}

                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? "focused" : ""}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i
                            className={
                                focused
                                    ? "focused iconfont zoom"
                                    : "iconfont zoom"
                            }
                        >
                            &#xe614;
                        </i>
                        {this.getListArea()}
                    </SearchWrapper>
                    <Addition>
                        <Link to="/write">
                            <Button className="writting">
                                <i className="iconfont">&#xe708;</i>
                                写文章
                            </Button>
                        </Link>
                        <Button className="reg">注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(["header", "focused"]),
        list: state.getIn(["header", "list"]),
        page: state.getIn(["header", "page"]),
        mouseIn: state.getIn(["header", "mouseIn"]),
        totalPage: state.getIn(["header", "totalPage"]),
        login: state.getIn(["login", "login"]),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            list.size === 0 && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = "rotate(" + originAngle + 360 + "deg)";
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        },
        logout() {
            dispatch(loginActionCreators.logout());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
