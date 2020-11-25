import React,{Component} from 'react'
import { Select, message, Button } from 'antd'
import './index.less'
import TableList from './tablelist/tablelist'
import TableData from './tabledata/tabledata'

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
                        placeholder="数据库"
                        style={{ width: 110 }}
                        onChange={this.handleChange}
                    >
                        <Option value="default">default</Option>
                        <Option value="miner">miner</Option>
                    </Select>
                    <Button type="primary">同步</Button>
                </div>
                <div className="datasource-table">
                    <TableList />
                </div>
                <div className="datasource-data">
                    <TableData />
                </div>
            </div>
        )
    }
}

export default DataSource