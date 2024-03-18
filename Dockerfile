FROM node:21.7-alpine

WORKDIR /app

COPY package.json ./package.json

RUN npm install

COPY . .

RUN npm run build

COPY .next ./.next

CMD ["npm", "run", "dev"]