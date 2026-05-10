FROM node:26-alpine3.22

WORKDIR /app

COPY package.json ./app

RUN npm install

COPY . ./app

EXPOSE 3001

CMD ["node", "server.js"]
