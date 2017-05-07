FROM node:boron

MAINTAINER Clinton Medbery <clintomed@gmail.com>

RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim"]

RUN mkdir - p /app
WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app
EXPOSE 3000

CMD ["npm", "start"]