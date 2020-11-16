/**
 * 工程化开发：封装公共逻辑作为工具类
 */
const Utils = {
    // 时间格式化工具类
    timeFormat(time) {
        if(!time) return ""

        let obj = new Date(time)
        return obj.getFullYear() + "年" + obj.getMonth() + "月" + obj.getDay()
               + "日 " + obj.getHours() + ":" + obj.getMinutes() + ":" + obj.getSeconds()
    }
}

export default Utils