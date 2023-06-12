FROM Node:18-alpine

ARG Port=4000

COPY . .

RUN npm install

RUN npm start

EXPOSE $Port