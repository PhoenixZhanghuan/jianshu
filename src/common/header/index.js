import React, {Component} from 'react';
import {HeaderWrapper, Logo, Nav, NavItem} from './style';

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem>首页</NavItem>
                    <NavItem>下载App</NavItem>
                    <NavItem>登录</NavItem>
                    <NavItem>Aa</NavItem>
                </Nav>
            </HeaderWrapper>
        );
    }
}

export default Header;