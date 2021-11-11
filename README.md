# React Activities

**React Activities** is a simple **React Application** running a simple **Release Process**.
> ![image](doc/app-arch.png)

## TL;DR

```bash
docker pull ghcr.io/pop-cloud/react-activities:latest
docker run --name my-react --rm -p 8080:80 ghcr.io/pop-cloud/react-activities:latest
```

Open http://localhost:8080/

## 0. Local Rest API

We can use the [json-server](https://github.com/typicode/json-server) to fake a full REST API
from a simple [data/db.json](data/db.json) in less than 30 seconds 

```json
{ "activities": { "create": 24, "update": 160, "delete": 16 } }
```

```bash
npm install -g json-server

json-server --watch data/db.json --port 5000
```

## 1. Local Dockerizing

```bash
docker build . \
  -f app.dockerfile \
  --build-arg ENV='test' \
  --build-arg BUILD="$(date "+%F %H:%M:%S")" \
  --build-arg GIT_HASH="$(git rev-parse --short HEAD)" \
  -t react-activities
  
docker run --name my-react --rm -p 8080:80 react-activities:latest

docker exec -it my-react /bin/sh
```

## 2. Remote Dockerizing
Using [GitHub Action](https://github.com/niehaitao/react-activities/actions)
- Automatic run for each push on master
- Manual run

<details>

> ![image](doc/ci-docker-githhub-action.png)

</details>

## 3. Docker Registry

[Docker Registry](https://github.com/orgs/pop-cloud/packages/container/package/react-activities) `ghcr.io/pop-cloud/react-activities`

<details>

> ![image](doc/ci-docker-registry.png)

</details>

```bash
docker pull ghcr.io/pop-cloud/react-activities:0.0.1

docker run --name my-react --rm -p 3030:3000 react-activities:latest
```
Open http://localhost:3030/

## 4. Kubernetes

```bash
kubectl create deploy my-react --image ghcr.io/pop-cloud/react-activities:latest
kubectl port-forward \
  $(kubectl get pods --selector "app=my-react" -o=name) \
  8080:80
```

## 5. Helm Chart

```bash
helm upgrade -i my-react react-activities --repo https://pop-cloud.github.io/helm-charts
```

## References

- [Docker React App](https://www.bogotobogo.com/DevOps/Docker/Docker-React-App.php)
- [Dockerize React App + Nginx](https://www.freecodecamp.org/news/how-to-implement-runtime-environment-variables-with-create-react-app-docker-and-nginx-7f9d42a91d70/)
- [Dockerize series](https://dev.to/karanpratapsingh/series/13483)