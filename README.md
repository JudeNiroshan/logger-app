## distributed-logger

This is an experiment of using Google Protocol Buffers between 2 isolated 
applications. There is a Spring-boot java REST API and NodeJS App. NodeJS app will 
be called by Spring-boot application exchanging data with Google Protocol 
Buffers.

### Overview

![Alt text](resources/overview.png?raw=true "Title")

users are intended to pass a JSON input like below:
```
    {
	"timestamp": 15623276532,
	"userId": 1029,
	"event": "something happened. Please log this in a file"
    }
```


