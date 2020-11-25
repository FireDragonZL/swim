import React,{Component} from 'react'

import PieTable from './chart01'
import Pie from './chart02'
import Line from './chart03'
import TaskChart from './chart04'
import './index.less'

class MetaData extends Component {
    render() {
        return (
            <div className="metadata-wrap">
                <div className="metadata-search">条件过滤选项</div>
                <div className="metadata-chart1">
                    <PieTable />
                </div>
                <div className="metadata-chart2">
                    <Pie />
                </div>
                <div className="metadata-chart3">
                    <TaskChart />
                </div>
                <div className="metadata-chart4">
                    <Line />
                </div>
            </div>
        )
    }
}

export default MetaData