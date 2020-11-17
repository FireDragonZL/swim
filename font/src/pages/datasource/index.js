import React,{Component} from 'react'
import { Select, message } from 'antd'
import './index.less'

const  { Option } = Select

class DataSource extends Component {

    // 数据库切换
    handleChange = value => {
        message.success(value)
    }

    render() {
        return (
            <div className="datasource-wrap">
                <div className="datasource-db">
                    <Select 
                        placeholder="请选择数据库"
                        style={{ width: 170 }}
                        onChange={this.handleChange}
                    >
                        <Option value="default">default</Option>
                        <Option value="miner">miner</Option>
                    </Select>
                </div>
                <div className="datasource-table">
                    表信息
                </div>
                <div className="datasource-data">
                    表格下载 + 字段过滤 + 
                </div>
            </div>
        )
    }
}

export default DataSource