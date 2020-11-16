import React,{Component} from 'react'
import {Card, Row, Col} from 'antd'
import './index.less'

class Home extends Component {
    render() {
        return (
            <div className="home-wrap">
                <Row className="col-wrap-option">
                    <Col span={6}>
                        <Card className="card-info">
                            HDFS连接
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card className="card-info">
                            Yarn连接
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card className="card-info">
                            Hive连接
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card className="card-info">
                            元数据库
                        </Card>
                    </Col>
                </Row>
                <Card className="home-wrap-info">
                    各个模块的详细信息
                </Card>
            </div>
        )
    }
}

export default Home
