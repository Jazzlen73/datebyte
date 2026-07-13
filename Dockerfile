FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 7860
CMD ["sh", "-c", "sed -i 's/listen       80;/listen 7860;/' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
