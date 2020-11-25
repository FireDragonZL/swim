package com.warehouse.swim.service.home;

import com.warehouse.swim.domain.vo.DataSourceForm;

public interface HomeService {
    /**
     * 测试数据库连接
     * @return
     */
    Object connectTest();

    /**
     * 插入数据库信息
     * @return
     */
    int insertDBInfo(DataSourceForm dataSource);
}
