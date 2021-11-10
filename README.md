# React Activities

**React Activities** is a simple **React Application**, for demonstrating the **CI/CD** process.

## TL;DR

## Local

```bash
docker build . \
  -f app.dockerfile \
  --build-arg API_URL='http://localhost:5000/activities' \
  --build-arg BUILD="$(date "+%F %H:%M:%S")" \
  --build-arg GIT_HASH="$(git rev-parse --short HEAD)" \
  -t react-activities
  
docker run --name my-react --rm -p 3000:3000 react-activities:latest

docker exec -it my-react /bin/sh
```

## References

- [Docker React App](https://www.bogotobogo.com/DevOps/Docker/Docker-React-App.php)
- [Dockerize React App + Nginx](https://www.freecodecamp.org/news/how-to-implement-runtime-environment-variables-with-create-react-app-docker-and-nginx-7f9d42a91d70/)
- [Dockerize series](https://dev.to/karanpratapsingh/series/13483)