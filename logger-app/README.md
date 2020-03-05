###logger-app

#### Description

This is a standalone NodeJS application which acts as a gRPC server. gRPC is a modern open source high performance RPC framework that can run in any environment. It can efficiently connect services in and across data centers with pluggable support for load balancing, tracing, health checking and authentication.

#### What it does

gRPC server can log message into a log file. Contract for communicating with gRPC server is defined by `event.proto` file. `event.proto` is Google Protocol Buffer which lay the foundation of communication medium between gRPC application and external applications. 

Currently there is one service defined in `event.proto` file. Therefore, it is only possible to call this service method defined as `logToFile()`.

#### How to run

 - clone the repository to your machine [`git clone https://github.com/JudeNiroshan/distributed-logger.git`]
 - move to `logger-app` [`cd distributed-logger/logger-app`]
 - execute `npm i`
 - execute `npm run start`