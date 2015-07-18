package com.zenyadesign.project.mobile.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableAutoConfiguration  
@ComponentScan("com.zenyadesign.project")  
@EntityScan("com.zenyadesign.project.mobile.pojo")  
@EnableJpaRepositories("com.zenyadesign.project")
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}