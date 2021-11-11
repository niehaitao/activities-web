FROM node:14.16.0-alpine3.10 as builder
WORKDIR /usr/app
#
COPY package.json .
RUN npm install
#
COPY jsconfig.json .
ADD src /usr/app/src
ADD public /usr/app/public
# Get build argument and set environment variable
ARG API_URL
ARG GIT_HASH
ARG BUILD

ENV REACT_APP_API_URL=http://localhost:5000/activities
ENV REACT_APP_GIT_HASH=$GIT_HASH
ENV REACT_APP_BUILD=$BUILD
RUN npm run build

# Run App
FROM nginx:stable-alpine
COPY --from=builder /usr/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]   
