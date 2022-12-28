FROM node:14-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${prod}


WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

CMD ["node", "dist/src/main"]