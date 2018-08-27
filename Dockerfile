FROM node:9
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
COPY . /app
CMD node server.js
EXPOSE 4242
