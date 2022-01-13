---
layout: article
permalink: /
title: Overview
sidebar:
  nav: docs-en
---

**Activities Web** is a **React Application** which shows the _create/update/delete_ activities by fetching json data from an API.





<div class="card">

  <div class="card__image">
    <img class="image" src="images/activities.gif"/>
  </div>

  <div class="card__content">
    <div class="card__header">
    <h3>Demo</h3>
    </div>
    <p markdown="1">
      **Activities Web** is a **React Application** which shows the _create/update/delete_ activities by fetching json data from an API.
    </p>
  </div>

</div>

<img src="images/workflow.png" />

This project uses GitHub Actions to build docker image and helm chart, and publish them. To get started:

| Application | Command                                                                                 | Check                                  |
| :---------: | :-------------------------------------------------------------------------------------- | :------------------------------------- |
|   docker    | `docker run --name act-web --rm -p 8080:80 ghcr.io/pop-cloud/activities-web:latest`     | http://localhost:8080/                 |
|     k8s     | `kubectl run act-web --image ghcr.io/pop-cloud/activities-web:latest`                   | `kubectl port-forward act-web 8080:80` |
|    helm     | `helm upgrade -i act-web activities-web --repo https://pop-cloud.github.io/helm-charts` | http://localhost:8080/                 |
