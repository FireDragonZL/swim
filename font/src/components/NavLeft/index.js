import React, {Component} from 'react'
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom'

import './index.less'
import menuList from '../../config/menuList'

const { SubMenu } = Menu;

class NavLeft extends Component {

    componentWillMount() {
        const menuTreeNode = this.renderMenuTree(menuList)
        this.setState({
            menuTreeNode
        })
    }

    // 渲染菜单的树状结构
    renderMenuTree = (data) => {
        return data.map(item => {
            if(item.children){
                return (
                    <SubMenu key={item.key} title={item.title}>
                        {this.renderMenuTree(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}>
                        <NavLink to={item.key}>
                            {item.title}
                        </NavLink>
                    </Menu.Item>
        })
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>Hive Util</h1>
                </div>
                <Menu
                    mode="inline"
                    theme="dark"
                    selectable="true"
                >
                    { this.state.menuTreeNode }
                </Menu>
            </div>
        )
    }
}

export default NavLeft