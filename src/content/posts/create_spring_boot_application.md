---
layout: ../../layouts/PostLayout.astro # Always use this layout, it's so the post gets properly styled
title: How to create a Spring Boot application
excerpt: According to the official Spring Boot website...
category: Learn
author: siddharth1006
createdAt: October 8th, 2023
---

<img src="https://4.bp.blogspot.com/-ou-a_Aa1t7A/W6IhNc3Q0gI/AAAAAAAAD6Y/pwh44arKiuM_NBqB1H7Pz4-7QhUxAgZkACLcBGAs/s1600/spring-boot-logo.png" width="300" height="150" />

**According to the official** *[Spring Boot](https://spring.io/projects/spring-boot)* **website,**

_Spring Boot is a software that makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run"._

We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss.

## Creating Your First Spring Boot Application

In this tutorial, we'll guide you through the process of creating your first Spring Boot application.

## Prerequisites

Before we begin, make sure you have the following:

- Java Development Kit (JDK) installed on your system.
- A code editor (e.g., IntelliJ IDEA, Eclipse, Visual Studio Code, etc.).
- Basic understanding of Java and Spring framework.

## Step 1: Set Up a New Spring Boot Project

1. Open your preferred Integrated Development Environment (IDE).
2. Create a new Spring Boot project.
   - You can use Spring Initializer (https://start.spring.io/) or your IDE's built-in Spring Boot project creation tool as follows:
   - Select the dependencies you need (e.g., Spring Web, Spring Boot DevTools, etc.).

## Step 2: Create a Spring Boot Application Class

1. Create a new Java class (e.g., `MyApplication`) in the `src/main/java/com/example/demo` directory.
2. Add the `@SpringBootApplication` annotation at the top of your class.
   ```java
   @SpringBootApplication
   public class MyApplication {
       public static void main(String[] args) {
           SpringApplication.run(MyApplication.class, args);
       }
   }

## Step 3: Create a Simple Controller

1. Create a new Java class (e.g., ```HelloController```) in the ```src/main/java/com/example/demo``` directory.
2. Add the ```@RestController``` and ```@RequestMapping``` annotations.
    ```java
    @RestController
    public class HelloController {
        @RequestMapping("/")
        public String hello() {
            return "Hello, World!";
        }
    }

## Step 4: Run Your Spring Boot Application

1. **Right-click** on the MyApplication class and select "Run MyApplication".
2. Alternatively, you can run the *application from the command line* using Maven:
            ```mvn spring-boot:run```

## Step 5: Access Your Application
Open a web browser and go to http://localhost:8080. You should see the message "Hello, World!".

