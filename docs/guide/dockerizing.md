---
layout: article
permalink: /dockerizing
title: Dockerizing
sidebar:
  nav: docs-en
---

<div class="grid-containre" markdown="1">

<div class="grid grid--p" markdown="1">
<div class="cell cell--12 cell--md-3 " markdown="1">
Build the **local** docker image and run it
</div>
<div class="cell cell--12 cell--md-9 " markdown="1">
```bash
docker build . \
  -f ops/docker/app.dockerfile \
  --build-arg ENV='test' \
  --build-arg BUILD="$(date "+%F %H:%M:%S")" \
  --build-arg GIT_HASH="$(git rev-parse --short HEAD)" \
  -t act-web
docker run -p 8082:80 --name web --network act --rm act-web:latest
```
</div>
<div class="cell cell--12 cell--md-3 " markdown="1">
Build the docker image with<br> [GitHub-Action](https://github.com/niehaitao/activities-web/actions)
</div>
<div class="cell cell--12 cell--md-9 " markdown="1">
  <img src="images/ci-docker-github-action.png">{:.rounded}
</div>
<div class="cell cell--12 cell--md-3 " markdown="1">
Host the docker image on the GitHub Registry<br> [pop-cloud/activities-web](https://github.com/orgs/pop-cloud/packages/container/package/activities-web)
</div>
<div class="cell cell--12 cell--md-9 " markdown="1">
  <img src="images/ci-docker-registry.png">{:.rounded}
</div>

</div>

</div>
