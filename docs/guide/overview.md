---
layout: article
permalink: /
title: Overview
aside:
  toc: true
sidebar:
  nav: docs-en
---


**Activities Web** is a **React Application** which shows the _create/update/delete_ activities by fetching json data from an API.

|                 Application                  |                  Workflow                  |
| :------------------------------------------: | :----------------------------------------: |
| <img src="images/activities.gif" width="300" /> | <img src="images/workflow.png" width="800" /> |

This project uses GitHub Actions to build docker image and helm chart, and publish them. To get started:

| Application | Command                                                                                 | Check                                  |
| :---------: | :-------------------------------------------------------------------------------------- | :------------------------------------- |
|   docker    | `docker run --name act-web --rm -p 8080:80 ghcr.io/pop-cloud/activities-web:latest`     | http://localhost:8080/                 |
|     k8s     | `kubectl run act-web --image ghcr.io/pop-cloud/activities-web:latest`                   | `kubectl port-forward act-web 8080:80` |
|    helm     | `helm upgrade -i act-web activities-web --repo https://pop-cloud.github.io/helm-charts` | http://localhost:8080/                 |
