package com.warehouse.swim.domain.vo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * 封装数据源连接的Form表单信息：
 *   => 根据前端定义的API文档中的JSON格式信息创建
 */
@Getter
@Setter
public class DataSourceForm {
    /**
     * 数据源类型
     * @JsonProperty 是将后端字段自动转换成和前端API文档中一致的字段
     */
    @JsonProperty("type")
    private int type;
    // 2. IP地址
    @JsonProperty("ip")
    private String ip;
    // 3. 端口号
    @JsonProperty("port")
    private int port;
    // 4. 数据库（hive/元数据库）
    @JsonProperty("dbName")
    private String dbName;
    // 5. 资源队列（yarn）
    @JsonProperty("queue")
    private String sourceQueue = "default";
    // 6. 用户名（元数据库）
    @JsonProperty("name")
    private String username;
    // 7. 密码（元数据库）
    @JsonProperty("pwd")
    private String password;
}
