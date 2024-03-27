FROM node:iron-alpine

RUN mkdir /app

WORKDIR /app

RUN chown node:node .

USER node

COPY ./dist ./dist

COPY ./node_modules ./node_modules

COPY package*.json .

EXPOSE 3000

CMD ["node", "./dist/index.js"]