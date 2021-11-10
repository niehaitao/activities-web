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
RUN touch .env
RUN echo "REACT_APP_API_URL=$API_URL"   >> .env
RUN echo "REACT_APP_GIT_HASH=$GIT_HASH" >> .env
RUN echo "REACT_APP_BUILD=$BUILD"       >> .env
# Run App
CMD ["npm", "start"]