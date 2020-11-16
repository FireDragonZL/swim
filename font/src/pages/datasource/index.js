import React,{Component} from 'react'
import './index.less'

class DataSource extends Component {
    render() {
        return (
            <div className="datasource-wrap">
                <div className="datasource-db">数据库:下拉菜单</div>
                <div className="datasource-table">数据库表</div>
                <div className="datasource-data">表详情数据</div>
            </div>
        )
    }
}

export default DataSource