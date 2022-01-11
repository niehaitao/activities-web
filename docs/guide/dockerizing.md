---
layout: article
permalink: /dockerizing
aside:
  toc: true
sidebar:
  nav: docs-en
---

# Dockerizing


## Local Dockerizing

```bash
docker build . \
  -f ops/docker/app.dockerfile \
  --build-arg ENV='test' \
  --build-arg BUILD="$(date "+%F %H:%M:%S")" \
  --build-arg GIT_HASH="$(git rev-parse --short HEAD)" \
  -t act-web
docker run -p 8082:80 --name web --network act --rm act-web:latest
```

## Remote Dockerizing

|                                                                      Build | Registry                                                                                                          |
| -------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------- |
| Using [GitHub Action](https://github.com/niehaitao/activities-web/actions) | [`ghcr.io/pop-cloud/activities-web`](https://github.com/orgs/pop-cloud/packages/container/package/activities-web) |
|         <img src="images/ci-docker-github-action.png" alt="app"  width="500"> | <img src="images/ci-docker-registry.png" alt="app"  width="500">                                                     |
