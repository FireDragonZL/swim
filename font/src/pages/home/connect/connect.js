import React from 'react'
import { Form, InputNumber, Input, message, Modal, Button } from 'antd'
import './connect.less'

/**
 * 数据源连接信息
 */
// 表单布局
const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 12 },
};

const Connect = props => {

    const { data, action } = props

    const [form] = Form.useForm()

    function handleFinish(value) {
        message.success("表单提交成功")
        console.log("value-->", value)
    }

    function handleFinishFailed() {
        message.error("表单提交失败")
    }
    

    function renderForm(type) {
        switch (type) {
            case 'hdfs':
                return (
                        <Form
                            form={form}
                            {...layout}
                            layout="horizontal"
                            size="large"
                            onFinish={handleFinish}
                            onFinishFailed={handleFinishFailed}
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
                )
            case 'yarn':
                return (
                        <Form
                            form={form}
                            {...layout}
                            layout="horizontal"
                            size="large"
                            onFinish={handleFinish}
                            onFinishFailed={handleFinishFailed}
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
                )
            case 'hive':
                return (
                        <Form
                            form={form}
                            {...layout}
                            layout="horizontal"
                            size="large"
                            onFinish={handleFinish}
                            onFinishFailed={handleFinishFailed}
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
                        <Form
                            form={form}
                            {...layout}
                            layout="horizontal"
                            size="large"
                            onFinish={handleFinish}
                            onFinishFailed={handleFinishFailed}
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
                )
        }
    }

    function handleOk() {
        message.success("连接中...")
        form.submit()
    }

    function handleConnectTest() {
        message.info("连接测试")
    }

    return (
        <Modal
            title={data.title}
            visible={data.visible}
            onOk={handleOk}
            onCancel={action}
            width={450}
            footer={[
                <Button key="test" onClick={handleConnectTest}>
                    测试
                </Button>,
                <Button key="connect" type="primary" onClick={handleOk}>
                    连接
                </Button>,
            ]}
        >
            {renderForm(data.type)}
        </Modal>
    )
}

export default Connect