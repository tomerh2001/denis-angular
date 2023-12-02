FROM node:11.15.0-alpine AS build-step
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.25.2-alpine
COPY --from=build-step /app/dist/app /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]