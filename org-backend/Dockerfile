FROM node:15

WORKDIR /usr/src

COPY package.json .

EXPOSE 5000

RUN npm i

COPY . .

RUN npx prisma generate

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && sudo tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.6.1.tar.gz \
  && rm dockerize-linux-amd64-v0.6.1.tar.gz