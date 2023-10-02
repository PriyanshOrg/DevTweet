---
layout: ../../layouts/PostLayout.astro 
title: How does object oriented JavaScript work?
excerpt: In this post we will learn about how object oriented JavaScript works.
createdAt: 2 October, 2023
author: vansh16aug
---

In the early nineties, a thing called object-oriented programming stirred up the software industry. Most of the ideas behind it were not really new at the time, but they had finally gained enough momentum to start rolling, to become fashionable. Books were being written, courses given, programming languages developed. All of a sudden, everybody was extolling the virtues of object-orientation, enthusiastically applying it to every problem, convincing themselves they had finally found the right way to write programs.

These things happen a lot. When a process is hard and confusing, people are always on the lookout for a magic solution. When something looking like such a solution presents itself, they are prepared to become devoted followers. For many programmers, even today, object-orientation (or their view of it) is the gospel. When a program is not 'truly object-oriented', whatever that means, it is considered decidedly inferior.

Few fads have managed to stay popular for as long as this one, though. Object-orientation's longevity can largely be explained by the fact that the ideas at its core are very solid and useful. In this chapter, we will discuss these ideas, along with JavaScript's (rather eccentric) take on them. The above paragraphs are by no means meant to discredit these ideas. What I want to do is warn the reader against developing an unhealthy attachment to them.

As the name suggests, object-oriented programming is related to objects. So far, we have used objects as loose aggregations of values, adding and altering their properties whenever we saw fit. In an object-oriented approach, objects are viewed as little worlds of their own, and the outside world may touch them only through a limited and well-defined interface, a number of specific methods and properties. The 'reached list' we used at the end of chapter 7 is an example of this: We used only three functions, makeReachedList, storeReached, and findReached to interact with it. These three functions form an interface for such objects.

The Date, Error, and BinaryHeap objects we have seen also work like this. Instead of providing regular functions for working with the objects, they provide a way to create such objects, using the new keyword, and a number of methods and properties that provide the rest of the interface.
