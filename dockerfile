FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . ./

EXPOSE 3000

CMD [ "npm","start" ]


# docker build -t node-rest-api .

# docker run -d -p 3000:3000 --name node-container node-rest-api