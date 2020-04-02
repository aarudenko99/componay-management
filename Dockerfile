FROM node:13-alpine
WORKDIR /app/
COPY ./package* ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /app/
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/dist .
