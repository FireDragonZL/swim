import React, {Component} from 'react'
import EchartsForReact from 'echarts-for-react'
// 加载主题文件信息的对象
import echartTheme from '../echarts-theme'
// 加载 echarts 中的核心配置项
import echarts from 'echarts/lib/echarts';

/**
 * 饼图
 */
class Pie extends Component {

    componentWillMount() {
        echarts.registerTheme("echartTheme", echartTheme)
    }

    getOption = () => {
        let option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            toolbox: {
                right: "10",
                feature: {
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            legend: {
                orient: 'vertical',
                left: 5,
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '60%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '15',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 335, name: '直接访问'},
                        {value: 310, name: '邮件营销'},
                        {value: 234, name: '联盟广告'},
                        {value: 135, name: '视频广告'}
                    ]
                }
            ]
        }
        return option
    }

    render() {
        return (
            <div style={{width:"100%"}}>
                <EchartsForReact 
                    option={this.getOption()}
                    theme={"echartTheme"}
                    style={{height: "200px"}}
                />
            </div>
        )
    }
}

export default Pie