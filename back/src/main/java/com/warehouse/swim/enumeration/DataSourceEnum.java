package com.warehouse.swim.enumeration;

/**
 * 数据源类型的枚举类
 */
public enum DataSourceEnum {
    HDFS(1, "HDFS"),
    YARN(2, "Yarn"),
    Hive(3, "Hive"),
    METADATA(4, "元数据库");

    private Integer code;

    private String message;

    DataSourceEnum(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public Integer getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}
