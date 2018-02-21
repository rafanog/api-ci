FROM node:8.7-alpine

RUN mkdir -p /home/app
WORKDIR /home/app

ADD package.json /home/app
RUN npm install
ADD . /home/app

CMD ["npm", "start"]

EXPOSE 3010
