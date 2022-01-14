---
layout: article
permalink: /
title: Overview
sidebar:
  nav: docs-en
---

**Activities Web** is a **React Application** which shows the _create/update/delete_ activities.

<div class="card">
  <div class="card__image">
    <img class="image" src="images/activities.gif"/>
  </div>
</div>

---

To spin-up your **Activities Web App** on [http://localhost:8080/](http://localhost:8080/)
{:.info}

<div class="grid-containre" markdown="1">

<!-- 1. docker -->
<div class="grid grid--p" markdown="1">
<div class="cell cell--12 cell--md-3 " markdown="1">

***Option 1*** docker

</div>
<div class="cell cell--12 cell--md-9 " markdown="1">

```bash
docker run --name act-web --rm -p 8080:80 ghcr.io/pop-cloud/activities-web:latest
```

</div>
</div>

<!-- 2. k8s -->
<div class="grid grid--p" markdown="1">
<div class="cell cell--12 cell--md-3 " markdown="1">

***Option 2*** kubernetes pod

</div>
<div class="cell cell--12 cell--md-9 " markdown="1">

```bash
kubectl run act-web --image ghcr.io/pop-cloud/activities-web:latest
kubectl port-forward act-web 8080:80
```

</div>
</div>

<!-- 3. helm -->
<div class="grid grid--p" markdown="1">
<div class="cell cell--12 cell--md-3 " markdown="1">

***Option 3*** kubernetes helm

</div>
<div class="cell cell--12 cell--md-9 " markdown="1">

```bash
helm upgrade -i act-web activities-web --repo https://pop-cloud.github.io/helm-charts
```

</div>
</div>

</div>

---



**Activities Web** fetches json data from an API. *See [how to to create your API in <30 seconds](getting-started.md#fake-the-rest-api)* 
{:.warning}

<img src="images/workflow.png" />

This project uses GitHub Actions to ***build docker image and helm chart***, and to ***publish them***.
{:.success}