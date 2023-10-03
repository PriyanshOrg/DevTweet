---
layout: ../../layouts/PostLayout.astro
title: What is GOLANG?
excerpt: In this post, we will learn about GOLANG.
author: supriadi
createdAt: October 03, 2023
---

Go, often referred to as Golang, is a programming language created by Google. It is designed for simplicity, efficiency, and scalability, making it suitable for a wide range of applications, including web development, system programming, and more. Here's a simple example in Go to illustrate its syntax and features:

```
package main

import (
    "fmt"
)

// Define a function that calculates the factorial of a number.
func factorial(n int) int {
    if n == 0 {
        return 1
    }
    return n * factorial(n-1)
}

func main() {
    // Print a message.
    fmt.Println("Hello, Go!")

    // Calculate and print the factorial of 5.
    result := factorial(5)
    fmt.Println("Factorial of 5:", result)
}

```
In this example:

1. We start with a package declaration (package main). In Go, a program must always start with a main package, and the  main function within it is the entry point of the program.

2. We import the "fmt" package to use functions like Println for output.

3. We define a function called factorial that calculates the factorial of a given integer using recursion.

4. In the main function, we print a "Hello, Go!" message to the console.

5. We then call the factorial function with the argument 5 and print the result.

To run this Go program, you need to have Go installed on your system. You can save this code in a file with a ".go" extension (e.g., "main.go") and then use the following command to run it:

```
go run main.go

```

This will compile and execute the code, and you will see the output on the console. In this case, it will print "Hello, Go!" and "Factorial of 5: 120" as the output.