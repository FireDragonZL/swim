package com.warehouse.swim.web;

import com.warehouse.swim.domain.vo.DataSourceForm;
import com.warehouse.swim.domain.vo.ResponseObj;
import com.warehouse.swim.service.home.impl.HomeServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * 主页模块相关的API
 */
@RestController
@RequestMapping(value = "/home")
public class HomeController {

    /**
     * org.slf4j.Logger是spring自带的日志管理工具
     */
    private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

    @Autowired
    private HomeServiceImpl homeService;

    @GetMapping(value = "/connect")
    @ResponseBody
    public ResponseObj connectDB(DataSourceForm dataSourceForm){
        // 1.连接成功则将信息写入数据库
        int one = homeService.insertDBInfo(dataSourceForm);
        // 2.连接失败则返回错误信息
        return new ResponseObj(200, "数据库写入成功", one);
    }

    @GetMapping(value = "/test")
    @ResponseBody
    public String connectTest() {
        // 1.连接数据库

        // 2.成功的返回success

        // 3.失败返回错误信息
        return "测试连接";
    }

    @GetMapping(value = "/edit")
    @ResponseBody
    public String editDBInfo() {
        // 1.连接数据源

        // 2.连接成功则修改数据库中的信息

        // 3.连接失败则返回错误信息
        return "编辑数据源信息";
    }

    @PostMapping(value = "/getDBInfo")
    @ResponseBody
    public String getDataInfo() {
        // 1.根据类型指定对应的数据源

        // 2.调用对应数据源API获取当前数据源概述信息

        // 3.失败则返回错误信息
        return "获取数据源概览信息";
    }

    @PostMapping(value = "/getDBChart")
    @ResponseBody
    public String getDataChart() {
        // 1.根据类型指定对应的数据源

        // 2.调用对应数据源API获取当前数据源概述信息

        // 3.失败则返回错误信息
        return "获取数据源图表信息";
    }
}
