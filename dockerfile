FROM node:18-alpine

ARG Port=4000

COPY . .

RUN npm install

EXPOSE $Port

CMD [ "npm", "start" ]