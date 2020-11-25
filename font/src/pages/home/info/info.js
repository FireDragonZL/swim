import React from 'react'

import HdfsInfo from './hdfsinfo/hdfsinfo'
import HiveInfo from './hiveinfo/hiveinfo'
import YarnInfo from './yarninfo/yarninfo'
import DBInfo from './dbinfo/dbinfo'

/**
 * 数据源连接信息
 */
const Info = props => {

    const { type } = props

    function renderSourceInfo(type) {
        switch(type) {
            case 'hdfs':
                return (
                    <HdfsInfo />
                )
            case 'yarn':
                return (
                    <YarnInfo />
                )
            case 'hive':
                return (
                    <HiveInfo />
                )
            case 'metadb':
                return (
                    <DBInfo />
                )
            default:
                return (
                    <div>请连接数据源</div>
                )
        }
    }

    return (
        <div>
            {renderSourceInfo(type)}
        </div>
    )
}

export default Info
