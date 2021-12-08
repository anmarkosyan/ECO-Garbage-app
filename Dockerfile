FROM node:14.18

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g nodemon
RUN npm install -g typescript

COPY . .

CMD npm start