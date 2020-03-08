#  logger-app 📠

[![Build Status](https://img.shields.io/travis/jupyterhub/jupyterhub/master?logo=travis)](https://travis-ci.org/JudeNiroshan/logger-app)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/836e6501e7954e58b4b4672ea4d0192f)](https://app.codacy.com/manual/JudeNiroshan/logger-app?utm_source=github.com&utm_medium=referral&utm_content=JudeNiroshan/logger-app&utm_campaign=Badge_Grade_Dashboard)
[![codecov](https://codecov.io/gh/JudeNiroshan/logger-app/branch/master/graph/badge.svg)](https://codecov.io/gh/JudeNiroshan/logger-app)
[![Known Vulnerabilities](https://snyk.io/test/github/JudeNiroshan/logger-app/badge.svg?targetFile=package.json)](https://snyk.io/test/github/JudeNiroshan/logger-app?targetFile=package.json)

This is a standalone NodeJS application which acts as a gRPC server. [Wait, what is gRPC?](https://grpc.io/)🔍

#### What it does 🤔

Logger-app can log event to a log file. The contract for communicating with gRPC server is defined by the `event.proto` file. `event.proto` is a Google Protocol Buffer which lays the foundation of communication medium for gRPC framework.

Currently there is one service defined in `event.proto` file. Therefore, it is only possible to call `logToFile()` from a remote client.

#### How to run 🏃🏽‍♂️

#### Prerequisite: 
Ensure [logger-eureka-server](https://github.com/JudeNiroshan/logger-eureka-server) instance up and running on your local machine. Then,

 - clone the repository to your machine [`git clone https://github.com/JudeNiroshan/logger-app.git`]
 - move to `logger-app` [`cd logger-app`]
 - execute `npm i`
 - execute `npm run start` (start the gRPC server and waiting for incoming events)
