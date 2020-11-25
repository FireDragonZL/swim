package com.warehouse.swim.mapper;

import com.warehouse.swim.domain.dao.DataSourceInfoDao;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface HomeMapper {
    /**
     * 插入一条数据源信息
     * @param dataSourceInfo
     * @return
     */
    int insertDBInfo(DataSourceInfoDao dataSourceInfo);
}
