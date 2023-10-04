---
layout: ../../layouts/PostLayout.astro # Always use this layout, it's so the post gets properly styled
title: What is JavaScript?
excerpt: JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. It is the language of the web.
author: william-monroy
createdAt: October 04, 2023
---

# **What is JavaScript?**

JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. It is the language of the web.

## Table of Contents

- [**What is JavaScript?**](#what-is-javascript)
  - [Table of Contents](#table-of-contents)
  - [**Basics of JavaScript**](#basics-of-javascript)
  - [**JavaScript Basic Syntax**](#javascript-basic-syntax)
  - [**First JavaScript Program (Hello World)**](#first-javascript-program-hello-world)
  - [**Datatypes in JavaScript**](#datatypes-in-javascript)
  - [**Difference between Primitive and Non-Primitive Datatypes**](#difference-between-primitive-and-non-primitive-datatypes)
  - [**JavaScript Identifiers**](#javascript-identifiers)
  - [**Operators in JavaScript**](#operators-in-javascript)
  - [**JavaScript Variables**](#javascript-variables)
  - [**Scope of Variables**](#scope-of-variables)
  - [**Wrapper Classes in JavaScript**](#wrapper-classes-in-javascript)
  - [**JavaScript Comments**](#javascript-comments)
  - [**JavaScript Keywords**](#javascript-keywords)
  - [**JavaScript Data Types**](#javascript-data-types)

## **Basics of JavaScript**

JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. It is the language of the web. JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc. This course will cover the fundamental aspects of JavaScript programming starting with how to include JavaScript in your HTML documents, variables, operators, data types, arrays, operators, control statements, objects, strings, and forms. We will also touch on advanced topics such as security, AJAX, and JSON.

## **JavaScript Basic Syntax**

JavaScript is a lightweight, interpreted programming language. It is designed for creating network-centric applications. It is complimentary to and integrated with Java. JavaScript is very easy to implement because it is integrated with HTML. It is open and cross-platform.

## **First JavaScript Program (Hello World)**

```javascript
// This is a comment
console.log("Hello World!");
```

## **Datatypes in JavaScript**

JavaScript is a loosely typed or a dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

```javascript
var x; // Now x is undefined
x = 5; // Now x is a Number
x = "John"; // Now x is a String
```

The latest ECMAScript standard defines seven data types:

- Six data types that are primitives:
  - Boolean. true and false.
  - null. A special keyword denoting a null value. Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.
  - undefined. A top-level property whose value is undefined.
  - Number. 42 or 3.14159.
  - String. "Howdy"
  - Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.
- and Object (which is a collection of properties).\*\*\*\*

## **Difference between Primitive and Non-Primitive Datatypes**

The difference between primitive and non-primitive data types are:

---

| Primitive                                                      | Non-Primitive                                                  |
| -------------------------------------------------------------- | -------------------------------------------------------------- |
| Primitive data types are predefined data types.                | Non-primitive data types are not predefined data types.        |
| Primitive data types are immutable.                            | Non-primitive data types are mutable.                          |
| Primitive data types are passed by value.                      | Non-primitive data types are passed by reference.              |
| Primitive data types are stored in the stack.                  | Non-primitive data types are stored in the heap.               |
| Primitive data types are copied by its value.                  | Non-primitive data types are copied by its reference.          |
| Primitive data types are faster than non-primitive data types. | Non-primitive data types are slower than primitive data types. |

## **JavaScript Identifiers**

All JavaScript variables must be identified with unique names. These unique names are called identifiers. Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume). The general rules for constructing names for variables (unique identifiers) are:

- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter
- Names can also begin with $ and \_ (but we will not use it in this tutorial)
- Names are case sensitive (y and Y are different variables)
- Reserved words (like JavaScript keywords) cannot be used as names
- You can use camel case or underscores to separate words in a variable name

## **Operators in JavaScript**

JavaScript has the following types of operators. This section describes the operators and contains information about operator precedence.

- Assignment operators
- Comparison operators
- Arithmetic operators
- Bitwise operators
- Logical operators
- String operators
- Conditional (ternary) operator
- Comma operator
- Unary operators
- Relational operators

## **JavaScript Variables**

JavaScript variables are containers for storing data values. In this example, x, y, and z, are variables, declared with the var keyword:

```javascript
var x = 5;
var y = 6;
var z = x + y;
```

From the example above, you can expect:

- x stores the value 5
- y stores the value 6
- z stores the value 11

Since ECMAScript 2015, there are two more ways to declare a variable: let and const.

- The let keyword is similar to var, in that we can use it to declare a variable, but it is scoped differently.
- The const keyword is similar to let in that it is block-scoped, but it is different in that a variable declared with const cannot be reassigned.
- The var keyword is function-scoped, meaning that variables declared with var are available anywhere within the function they are declared in, or if not declared within a function, are available globally.

## **Scope of Variables**

The scope of a variable is the region of your program in which it is defined. JavaScript variables have only two scopes.

- Global Variables − A global variable has global scope which means it is visible everywhere in your JavaScript code.
- Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.
- JavaScript has function scope: Each function creates a new scope.
- Scope determines the accessibility (visibility) of these variables.
- Variables defined inside a function are not accessible (visible) from outside the function.
- Local variables have Function scope: They can only be accessed from within the function.
- Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
- Local variables are created when a function starts, and deleted when the function is completed.
- Global and local variables with the same name are different variables. Modifying one, does not modify the other.
- In JavaScript, objects and functions are also variables.

## **Wrapper Classes in JavaScript**

JavaScript provides three primitive wrapper classes:

- String
- Number
- Boolean

These three wrapper classes are immutable (i.e. unchangeable).

## **JavaScript Comments**

Comments can be used to explain JavaScript code, and to make it more readable. Comments can also be used to prevent execution, when testing alternative code. Single line comments start with // Multi-line comments start with /_ and end with _/ (like in C++ and Java)

## **JavaScript Keywords**

JavaScript keywords are used to identify actions to be performed. The var keyword tells the browser to create variables. The function keyword tells the browser to create functions. The return keyword tells the browser to return a value.

## **JavaScript Data Types**

JavaScript variables can hold many data types: numbers, strings, objects and more:

```javascript
var length = 16; // Number
var lastName = "Johnson"; // String
var x = { firstName: "John", lastName: "Doe" }; // Object
```

If this content was helpful, please consider [getting in touch](https://www.github.com/william-monroy) for more content like this.
