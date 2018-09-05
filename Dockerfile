FROM node:9
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
COPY . /app
CMD node server.js
VOLUME ./data/db /data/db
EXPOSE 4242
