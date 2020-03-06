#logger-app 📠

[![Build Status](https://travis-ci.org/JudeNiroshan/logger-app.svg?branch=master)](https://travis-ci.org/JudeNiroshan/logger-app)

This is a standalone NodeJS application which acts as a gRPC server. gRPC is a modern open source high performance RPC framework that can run in any environment. It can efficiently connect services in and across data centers with pluggable support for load balancing, tracing, health checking and authentication.

#### What it does 🤔

Logger-app can log event to a log file. The contract for communicating with gRPC server is defined by the `event.proto` file. `event.proto` is a Google Protocol Buffer which lays the foundation of communication medium for gRPC framework.

Currently there is one service defined in `event.proto` file. Therefore, it is only possible to call `logToFile()` from a remote client.

#### How to run 🏃🏽‍♂️

 - clone the repository to your machine [`git clone https://github.com/JudeNiroshan/logger-app.git`]
 - move to `logger-app` [`cd logger-app`]
 - execute `npm i`
 - execute `npm run start` (start the gRPC server and waiting for incoming events)
