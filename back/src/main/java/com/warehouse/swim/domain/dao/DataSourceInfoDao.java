package com.warehouse.swim.domain.dao;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.apache.ibatis.type.Alias;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Getter
@Setter
@Alias("datasourceInfo")
public class DataSourceInfoDao {

    @Id
    private Integer id;
    private Integer type;
    private String name;
    private String url;
    private String db_name;
    private String username;
    private String passsword;
    private Date create_time;
    private Date update_time;

}
