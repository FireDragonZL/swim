import React, {Component} from 'react'

/**
 * 数据源连接信息
 */
class Info extends Component {
    render() {
        const { type } = this.props
        return (
            <div>
                数据源的详细信息: {type}
            </div>
        )
    }
}

export default Info
