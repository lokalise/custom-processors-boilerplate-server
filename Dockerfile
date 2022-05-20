FROM node:16-alpine3.12

WORKDIR /src
COPY package.json /
EXPOSE 3000

# on CI normaly you use npm ci / npm clean-install
RUN npm install
COPY . /
CMD ["npm", "start"]
