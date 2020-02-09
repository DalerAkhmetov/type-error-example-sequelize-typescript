FROM node:10.14.1-alpine

WORKDIR app
COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .
RUN yarn build:example

