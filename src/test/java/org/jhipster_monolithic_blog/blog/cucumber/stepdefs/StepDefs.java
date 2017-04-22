package org.jhipster_monolithic_blog.blog.cucumber.stepdefs;

import org.jhipster_monolithic_blog.blog.JhipsterMonolithicExampleApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = JhipsterMonolithicExampleApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
