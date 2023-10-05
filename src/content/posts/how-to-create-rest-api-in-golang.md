---
layout: ../../layouts/PostLayout.astro
title: How to Create REST API in Golang?
excerpt: In this post, we will learn how to create REST API in Golang.
author: bangadam
createdAt: October 04, 2023
---

## How To Create REST API in Golang?

![](https://cdn-images-1.medium.com/max/2800/0*GyIin64K_t0cjgo5.png)

The Golang programming language is prevalent, and many local and foreign companies are looking for programmers with Golang language skills. Therefore in this article, I will explain one of the things that must be mastered as a beginner programmer, namely creating a REST API. In this article, we will learn some things as the points below:

- How to implement a simple REST API using the Golang language

- Using Go ServeMux library as route request to handlers

- Using minimal libraries to build JSON REST API

okay, let’s start with the execution :)

## Using Go ServeMux

The ServeMux library is the main component in building the API in this article, which is useful for managing requests into handlers while it also functions as a pattern-matching against URL paths on HTTP, making it easier for us.
The following is an example of the code to use:

    type userHandler struct {}

    func (h *userHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
        // all users request are going to be routed here
    }

    func main() {
      mux := http.NewServeMux()
      mux.Handle("/users/", &userHandler{})
      http.ListenAndServe(":8080", mux)
    }

Then add some statements to the ServeHTTP method so that it can handle requests

    var (
        listUserRe = regexp.MustCompile(`^\/users[\/]*$`)
        getUserRe  = regexp.MustCompile(`^\/users\/(\d+)$`)
        createUserRe = regexp.MustCompile(`^\/users[\/]*$`)
    )

    type userHandler struct {}

    func (h *userHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("content-type", "application/json")
        switch {
           case r.Method == http.MethodGet && listUserRe.MatchString(r.URL.Path):
            h.List(w, r)
            return
           case r.Method == http.MethodGet && getUserRe.MatchString(r.URL.Path):
            h.Get(w, r)
            return
           case r.Method == http.MethodPost && createUserRe.MatchString(r.URL.Path):
            h.Create(w, r)
            return
        default:
            notFound(w, r)
            return
        }
    }

    func main() {
        mux := http.NewServeMux()
        mux.Handle("/users/", &userHanlder{})
        http.ListenAndServe(":8080", mux)
    }

Now we just need to add some storage and create the appropriate handler for each request. For this example, we’ll use in-memory storage, but you can use whatever storage type best meets your needs.

## Final Code

    package main

    import (
        "encoding/json"
        "net/http"
        "regexp"
        "sync"
    )

    var (
        listUserRe   = regexp.MustCompile(`^\/users[\/]*$`)
        getUserRe    = regexp.MustCompile(`^\/users\/(\d+)$`)
        createUserRe = regexp.MustCompile(`^\/users[\/]*$`)
    )

    type user struct {
        ID   string `json:"id"`
        Name string `json:"name"`
    }

    type datastore struct {
        m map[string]user
        *sync.RWMutex
    }

    type userHandler struct {
        store *datastore
    }

    func (h *userHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("content-type", "application/json")
        switch {
        case r.Method == http.MethodGet && listUserRe.MatchString(r.URL.Path):
            h.List(w, r)
            return
        case r.Method == http.MethodGet && getUserRe.MatchString(r.URL.Path):
            h.Get(w, r)
            return
        case r.Method == http.MethodPost && createUserRe.MatchString(r.URL.Path):
            h.Create(w, r)
            return
        default:
            notFound(w, r)
            return
        }
    }

    func (h *userHandler) List(w http.ResponseWriter, r *http.Request) {
        h.store.RLock()
        users := make([]user, 0, len(h.store.m))
        for _, v := range h.store.m {
            users = append(users, v)
        }
        h.store.RUnlock()
        jsonBytes, err := json.Marshal(users)
        if err != nil {
            internalServerError(w, r)
            return
        }
        w.WriteHeader(http.StatusOK)
        w.Write(jsonBytes)
    }

    func (h *userHandler) Get(w http.ResponseWriter, r *http.Request) {
        matches := getUserRe.FindStringSubmatch(r.URL.Path)
        if len(matches) < 2 {
            notFound(w, r)
            return
        }
        h.store.RLock()
        u, ok := h.store.m[matches[1]]
        h.store.RUnlock()
        if !ok {
            w.WriteHeader(http.StatusNotFound)
            w.Write([]byte("user not found"))
            return
        }
        jsonBytes, err := json.Marshal(u)
        if err != nil {
            internalServerError(w, r)
            return
        }
        w.WriteHeader(http.StatusOK)
        w.Write(jsonBytes)
    }

    func (h *userHandler) Create(w http.ResponseWriter, r *http.Request) {
        var u user
        if err := json.NewDecoder(r.Body).Decode(&u); err != nil {
            internalServerError(w, r)
            return
        }
        h.store.Lock()
        h.store.m[u.ID] = u
        h.store.Unlock()
        jsonBytes, err := json.Marshal(u)
        if err != nil {
            internalServerError(w, r)
            return
        }
        w.WriteHeader(http.StatusOK)
        w.Write(jsonBytes)
    }

    func internalServerError(w http.ResponseWriter, r *http.Request) {
        w.WriteHeader(http.StatusInternalServerError)
        w.Write([]byte("internal server error"))
    }

    func notFound(w http.ResponseWriter, r *http.Request) {
        w.WriteHeader(http.StatusNotFound)
        w.Write([]byte("not found"))
    }

    func main() {
        mux := http.NewServeMux()
        userH := &userHandler{
            store: &datastore{
                m: map[string]user{
                    "1": user{ID: "1", Name: "bob"},
                },
                RWMutex: &sync.RWMutex{},
            },
        }
        mux.Handle("/users", userH)
        mux.Handle("/users/", userH)

        http.ListenAndServe("localhost:8080", mux)
    }

## Run and Test our REST API Server

run the command below to run the Golang project

    $ go run server.go

then call the REST API URL that you created earlier, as below

    curl http://localhost:8080/users
    [{"id":"1","name":"bob"}]

    curl http://localhost:8080/users/1
    {"id":"1","name":"bob"}

    curl -X POST -H 'content-type: application/json' --data '{"id": "2", "name": "karen"}' http://localhost:8080/users
    {"id":"2","name":"karen"}

    curl http://localhost:8080/users
    [{"id":"1","name":"bob"},{"id":"2","name":"karen"}]

    curl http://localhost:8080/users/2
    {"id":"2","name":"karen"}

## Thanks For Reading!

Available for a new project! Let’s have a talk :
Email: [bangadam.dev@gmail.com](mailto:bangadam.dev@gmail.com)
Linkedin: [https://www.linkedin.com/in/bangadam](https://www.linkedin.com/in/bangadam/)
