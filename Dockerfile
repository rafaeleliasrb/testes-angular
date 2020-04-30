FROM node:latest as angular
WORKDIR /app
COPY package.json /app
RUN npm install --unsafe
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/testes-angular /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
