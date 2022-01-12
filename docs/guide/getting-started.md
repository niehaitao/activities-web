---
layout: article
permalink: /getting-started
title: Getting Started
aside:
  toc: true
sidebar:
  nav: docs-en
---



**Purpose**: Run the application against a mock API 

## Local Rest API

In less than 30 seconds, we can mock a full REST API using the [json-server](https://github.com/typicode/json-server) from [a simple json file](https://raw.githubusercontent.com/niehaitao/niehaitao.github.io/main/applications/activities/db.json).

```bash
npm install -g json-server

json-server https://raw.githubusercontent.com/niehaitao/niehaitao.github.io/main/applications/activities/db.json --port 8081 --delay 3000

curl -X GET 'http://localhost:8081/activities'
# { "create": 24, "update": 160, "delete": 16 }

docker run -p 8081:80 -v ${db_file}:/data/db.json --name api --network act --rm clue/json-server
```

## Run It

```bash
PORT=8082 \
REACT_APP_API_URL=http://localhost:8081 \
REACT_APP_BUILD=$(date +'%F %H:%M:%S')  \
REACT_APP_GIT_HASH=$(git rev-parse --short HEAD) \
npm start
```