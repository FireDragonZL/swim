package com.warehouse.swim.domain.vo;

import lombok.Data;

/**
 * 返回信息的封装类：与前端的视图层直接交互
 */
@Data
public class ResponseObj {
    /**
     * 返回信息的状态
     */
    private int status;
    /**
     * 返回描述信息
     */
    private String message;
    /**
     * 返回的具体数据
     */
    private Object data;

    public ResponseObj() {
    }

    public ResponseObj(int status, String message, Object data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}
