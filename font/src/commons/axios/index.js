import axios from 'axios'
import { Modal } from 'antd'

/**
 * 异步请求接口封装
 */
class AxiosUtils {

    // 获取表格数据
    static ajax(options) {
        // 加载loading
        let loading;
        if (options.data && options.data.isShowLoading !== false){
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }
        
        let baseURL = '/api'
        // 返回一个Promise对象
        return new Promise((resolve, reject) => {
            axios({
                baseURL: baseURL,
                url: options.url,
                method: "get",
                timeout: 3000,
                params: (options.data && options.data.params) || ""
            }).then(response => {
                // 结束loading
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                
                if(response.status == '200') {
                    let res = response.data
                    if(res.code == '0') {
                        resolve(res)
                    }else{
                        Modal.info({
                            title: '提示',
                            content: res.message
                        })
                    } 
                }else{
                    reject(response.data)
                }
            })
        })
        
    }
}

export default AxiosUtils