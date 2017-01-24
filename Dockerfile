FROM node:latest

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install -g gulp
RUN npm install

COPY . /usr/src/app
RUN npm run test

CMD "npm" "run" "app"
EXPOSE 8090
