import React, {Component} from 'react'
import { Form, InputNumber, Input } from 'antd'
import './connect.less'

/**
 * 数据源连接信息
 */
const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 12 },
};

class Connect extends Component {

    render() {
        const { type } = this.props
        switch (type) {
            case 'hdfs':
                return (
                    <div>
                        <Form
                            {...layout}
                            layout="horizontal"
                            size="large"
                        >
                            <Form.Item 
                                name="ip" 
                                label="IP地址"
                                rules={[
                                    { required: true, message: 'Please input your ip address!' },
                                    { pattern: /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/g, message: 'IP address format is illegal!' }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item 
                                name="port" 
                                label="端口号"
                                rules={[
                                    { required: true, message: 'Please input your port number!' },
                                    { min: 0, max: 3000, type: "number", message: 'range is 0 ~ 30000'}
                                ]}
                            >
                                <InputNumber />
                            </Form.Item>
                        </Form>
                    </div>
                )
            case 'yarn':
                return (
                    <div>
                        <Form
                            {...layout}
                            layout="horizontal"
                            size="large"
                        >
                            <Form.Item 
                                name="ip" 
                                label="IP地址"
                                rules={[
                                    { required: true, message: 'Please input your ip address!' },
                                    { pattern: /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/g, message: 'IP address format is illegal!' }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item 
                                name="port" 
                                label="端口号"
                                rules={[
                                    { required: true, message: 'Please input your port number!' },
                                    { min: 0, max: 3000, type: "number", message: 'range is 0 ~ 30000'}
                                ]}
                            >
                                <InputNumber />
                            </Form.Item>
                            <Form.Item 
                                name="queue" 
                                label="队列名"
                                rules={[{ required: true, message: 'Please input your source queue name!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Form>
                    </div>
                )
            case 'hive':
                return (
                        <Form
                            {...layout}
                            layout="horizontal"
                            size="large"
                        >
                            <Form.Item 
                                name="ip" 
                                label="IP地址"
                                rules={[
                                    { required: true, message: 'Please input your ip address!' },
                                    { pattern: /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/g, message: 'IP address format is illegal!' }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item 
                                name="port" 
                                label="端口号"
                                rules={[
                                    { required: true, message: 'Please input your port number!' },
                                    { min: 0, max: 3000, type: "number", message: 'range is 0 ~ 30000'}
                                ]}
                            >
                                <InputNumber />
                            </Form.Item>
                            <Form.Item 
                                name="database" 
                                label="数据库"
                                rules={[{ required: true, message: 'Please input your database name!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Form>
                )
            default:
                return (
                    <div>
                        <Form
                            {...layout}
                            layout="horizontal"
                            size="large"
                        >
                            <Form.Item 
                                name="ip" 
                                label="IP地址"
                                rules={[
                                    { required: true, message: 'Please input your ip address!' },
                                    { pattern: /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/g, message: 'IP address format is illegal!' }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item 
                                name="port" 
                                label="端口号"
                                rules={[
                                    { required: true, message: 'Please input your port number!' },
                                    { min: 0, max: 3000, type: "number", message: 'range is 0 ~ 30000'}
                                ]}
                            >
                                <InputNumber />
                            </Form.Item>
                            <Form.Item 
                                name="database" 
                                label="数据库"
                                rules={[{ required: true, message: 'Please input your database name!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item 
                                name="name" 
                                label="用户名"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item 
                                name="password" 
                                label="密码"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </Form>
                    </div>
                )
        }
        
    }
}

export default Connect