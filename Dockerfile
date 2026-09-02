FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM golang:1.24-alpine AS api-build

WORKDIR /app
COPY api/go.mod api/main.go ./
RUN CGO_ENABLED=0 go build -o /lead-api .

FROM alpine:3.21 AS api

COPY --from=api-build /lead-api /lead-api
EXPOSE 8080
CMD ["/lead-api"]

FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --quiet --spider http://127.0.0.1/ || exit 1
