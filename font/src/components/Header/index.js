import React, {Component} from 'react'
import { Row, Col } from 'antd'

import './index.less'

class Header extends Component {

    componentWillMount() {
        this.setState({
            userName: "四月"
        })
    }

    render() {
        const {sysTime, userName} = this.state
        return (
            <div>
                <Row className="header-title">
                    <Col span={3} className="option">
                        <span>首页</span>
                    </Col>
                    <Col span={21} className="info">
                        <span>您好！{userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header
