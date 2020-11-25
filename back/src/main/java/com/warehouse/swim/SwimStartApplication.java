package com.warehouse.swim;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.warehouse.swim.mapper")
public class SwimStartApplication {
    public static void main(String[] args) {
        SpringApplication.run(SwimStartApplication.class, args);
    }
}
