#version of node
FROM node:10-alpine

RUN mkdir /app

WORKDIR /app

COPY ./package.json .

RUN npm install
RUN npm install react-google-login react-social-login-buttons

COPY . /app
EXPOSE 8080
CMD ["npm", "start"]
