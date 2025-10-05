# --- build stage ---
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json* yarn.lock* ./
RUN npm ci --legacy-peer-deps || npm install

COPY . .

RUN npm run build

# --- serve stage ---
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80