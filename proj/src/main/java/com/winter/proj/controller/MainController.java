package com.winter.proj.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;


@RestController
@RequiredArgsConstructor

public class MainController{
    @GetMapping("/")
    public List<String> getAllDevelopers() {
        // GET /developers HTTP1.1
        
        return Arrays.asList("HI", "HELLO", "WORLD");
    }
}