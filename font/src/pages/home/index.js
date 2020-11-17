import React,{Component} from 'react'
import {Card, Row, Col, Button, Modal, loading} from 'antd'

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
            visible: false,
            title: "",
            loading: false,
            type: ""
        }
    }

    // 数据源连接事件
    handleConnect = (item) => {
        this.setState({
            visible: true,
            title: item.title,
            type: item.type
        })
    }

    // 数据源信息切换事件
    handleChange = (type) => {
        this.setState({
            type
        })
    }

    // 连接测试
    handleConnectTest = () => {
        alert("连接测试")
    }

    // 关闭弹窗
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }

    // 数据源连接
    handleOk = () => {
        this.setState({
            loading: true
        })
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
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
                    <Info type={this.state.type} />
                </Card>
                <Modal
                    title={this.state.title}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={450}
                    footer={[
                        <Button key="test" onClick={this.handleConnectTest}>
                          测试
                        </Button>,
                        <Button key="connect" type="primary" loading={this.state.loading} onClick={this.handleOk}>
                          连接
                        </Button>,
                    ]}
                >
                    <Connect type={this.state.type}/>
                </Modal>
            </div>
        )
    }
}

export default Home
