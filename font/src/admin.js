import React, {Component} from 'react'
import { Row, Col } from 'antd'

import Header from './components/Header'
import NavLeft from './components/NavLeft'
import './style/common.less'

/**
 * 主页面设计：基于栅格系统进行页面分层
 */
class Admin extends Component {
    render() {
        return (
            <Row className="container">
                <Col span={3} className="nav-left">
                    <NavLeft />
                </Col>
                <Col span={21} className="main">
                    <Header />
                    <Row className="content">
                        {this.props.children}
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default Admin