---
layout: article
permalink: /getting-started
title: Getting Started
sidebar:
  nav: docs-en
---



**Purpose**: Run the application against a mock API 

## Fake the Rest API

In < 30 seconds, we can mock a full REST API using the [json-server](https://github.com/typicode/json-server) over a simple json file
{:.success}

<div class="grid-containre" markdown="1">
<!-- 1 -->
<div class="grid grid--p" markdown="1">
<div class="cell cell--12 cell--md-3 " markdown="1">

**Input** Sample json file

</div>
<div class="cell cell--12 cell--md-9 " markdown="1">
{% gist e38b0523cce3bbcb9947e2cac035dcc6 act.api.json-server.data.json %}

</div>
</div>
<!-- 2 -->
<div class="grid grid--p" markdown="1">
<div class="cell cell--12 cell--md-3 " markdown="1">

***Option 1*** Run the json-server on the local

</div>
<div class="cell cell--12 cell--md-9 " markdown="1">
{% gist e38b0523cce3bbcb9947e2cac035dcc6 act.api.json-server.run.sh %}
</div>
</div>
<!-- 3 -->
<div class="grid grid--p" markdown="1">
<div class="cell cell--12 cell--md-3 " markdown="1">

***Option 2*** Run the json-server on the docker

</div>
<div class="cell cell--12 cell--md-9 " markdown="1">
```bash
docker run -p 8081:80 -v ${db_file}:/data/db.json --name api --rm clue/json-server
```
</div>
</div>
<!-- 4 -->
<div class="grid grid--p" markdown="1">
<div class="cell cell--12 cell--md-3 " markdown="1">

**Output** Visit the Rest API [http://localhost:8081](http://localhost:8081)

</div>
<div class="cell cell--12 cell--md-9 " markdown="1">
{% gist e38b0523cce3bbcb9947e2cac035dcc6 act.api.json-server.test.sh %}
</div>
</div>

</div>



## Run the Web App

<div class="grid-containre" markdown="1">
<div class="grid grid--p" markdown="1">

<div class="cell cell--12 cell--md-3 " markdown="1">

Spin-up the **Activities Web App** on [http://localhost:8082](http://localhost:8082)

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
