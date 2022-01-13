---
layout: article
permalink: /getting-started
title: Getting Started
sidebar:
  nav: docs-en
---



**Purpose**: Run the application against a mock API 

## Fake the Rest API

<div class="grid-containre" markdown="1">
<div class="grid grid--p" markdown="1">
<div class="cell cell--12 cell--md-3 " markdown="1">
In < 30 seconds, we can mock a full REST API using the [json-server](https://github.com/typicode/json-server) from a simple json file
</div>
<div class="cell cell--12 cell--md-9 " markdown="1">
{% gist e38b0523cce3bbcb9947e2cac035dcc6 act.api.json-server.data.json %}

{% gist e38b0523cce3bbcb9947e2cac035dcc6 act.api.json-server.run.sh %}

{% gist e38b0523cce3bbcb9947e2cac035dcc6 act.api.json-server.test.sh %}
</div>


<div class="cell cell--12 cell--md-3 " markdown="1">
***optional*** Run the json-server on the docker
</div>
<div class="cell cell--12 cell--md-9 " markdown="1">
```bash
docker run -p 8081:80 -v ${db_file}:/data/db.json --name api --rm clue/json-server
```
</div>

</div>
</div>



## Run the Web App

<div class="grid-containre" markdown="1">
<div class="grid grid--p" markdown="1">

<div class="cell cell--12 cell--md-3 " markdown="1">
Spin-up the activities-web application on http://localhost:8081
</div>
<div class="cell cell--12 cell--md-9 " markdown="1">
```bash
REACT_APP_API_URL=http://localhost:8081           \
REACT_APP_BUILD=$(date +'%F %H:%M:%S')            \
REACT_APP_GIT_HASH=$(git rev-parse --short HEAD)  \
PORT=8082 npm start
```
</div>

</div>
</div>
