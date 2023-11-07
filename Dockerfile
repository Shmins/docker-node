FROM node:slim

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 4200

CMD node src/index.js