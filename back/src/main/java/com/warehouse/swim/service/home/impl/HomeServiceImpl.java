package com.warehouse.swim.service.home.impl;

import com.warehouse.swim.domain.dao.DataSourceInfoDao;
import com.warehouse.swim.domain.vo.DataSourceForm;
import com.warehouse.swim.enumeration.DataSourceEnum;
import com.warehouse.swim.mapper.HomeMapper;
import com.warehouse.swim.service.home.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HomeServiceImpl implements HomeService {

    @Autowired(required = false)
    private HomeMapper homeMapper;

    @Override
    public Object connectTest() {
        return null;
    }

    @Override
    public int insertDBInfo(DataSourceForm dataSource) {
        // 将form数据转为dao存储对象
        DataSourceInfoDao dataSourceInfoDao = form2DataSourceInfoDao(dataSource);
        int one = homeMapper.insertDBInfo(dataSourceInfoDao);
        return one;
    }

    private DataSourceInfoDao form2DataSourceInfoDao(DataSourceForm dataSource) {
        int type = dataSource.getType();

        if (type == DataSourceEnum.YARN.getCode()) {
            return transformYarnDao(dataSource);
        }
        if (type == DataSourceEnum.METADATA.getCode()) {
            return transformMetaDataDao(dataSource);
        }
        if (type == DataSourceEnum.Hive.getCode()) {
            return transformHiveDao(dataSource);
        }

        return transformHDFSDao(dataSource);
    }

    private DataSourceInfoDao transformHDFSDao(DataSourceForm dataSource) {
        String url = "hdfs://" + dataSource.getIp() + ":" + dataSource.getPort();

        DataSourceInfoDao sourceInfoDao = new DataSourceInfoDao();
        sourceInfoDao.setType(dataSource.getType());
        sourceInfoDao.setUrl(url);
        sourceInfoDao.setName(DataSourceEnum.HDFS.getMessage());

        return sourceInfoDao;
    }

    private DataSourceInfoDao transformYarnDao(DataSourceForm dataSource) {
        DataSourceInfoDao sourceInfoDao = new DataSourceInfoDao();
        return sourceInfoDao;
    }

    private DataSourceInfoDao transformHiveDao(DataSourceForm dataSource) {
        DataSourceInfoDao sourceInfoDao = new DataSourceInfoDao();
        return sourceInfoDao;
    }

    private DataSourceInfoDao transformMetaDataDao(DataSourceForm dataSource) {
        DataSourceInfoDao sourceInfoDao = new DataSourceInfoDao();
        return sourceInfoDao;
    }
}
