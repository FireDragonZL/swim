import React,{Component} from 'react'
import {Card, Row, Col, Button} from 'antd'

import Info from './info/info'
import Connect from './connect/connect'
import './index.less'
import homeList from '../../config/homeList'

class Home extends Component {

    // 渲染前挂载
    componentWillMount() {
        const homeMenu = this.renderHomeMenu(homeList)
        this.state = {
            homeMenu,
            datasource: {
                visible: false,
                title: "",
                type: "hdfs",
            }
        }
    }

    // 关闭弹窗
    closeModal = () => {
        const {datasource} = this.state
        datasource.visible = false
        this.setState({
            datasource
        })
    }

    // 数据源连接事件
    handleConnect = (item) => {
        this.setState({
            datasource: {
                visible: true,
                title: item.title,
                type: item.type,
            }
        })
    }

    // 数据源信息切换事件
    handleChange = (type) => {
        const {datasource} = this.state
        datasource.type = type
        this.setState({
            datasource
        })
    }

    // 循环渲染主页面的菜单选项
    renderHomeMenu = data => {
        return data.map(item => {
            if(item.isConnect) {
                return <Col span={6}>
                            <Card 
                                className="card-info"
                                title={item.title}
                                onClick={() => this.handleChange(item.type)}
                            >
                                连接成功
                            </Card>
                        </Col>
            }
            return <Col span={6}>
                        <Card 
                            className="card-info"
                            title={item.title}
                        >
                            <Button
                                onClick={() => this.handleConnect(item)}
                            >
                                新建连接
                            </Button>
                        </Card>
                    </Col>
        })
    }

    render() {
        return (
            <div className="home-wrap">
                <Row className="col-wrap-option">
                    {this.state.homeMenu}
                </Row>
                <Card className="home-wrap-info">
                    <Info type={this.state.datasource.type} />
                </Card>
                <Connect data={this.state.datasource} action={this.closeModal} />
            </div>
        )
    }
}

export default Home
