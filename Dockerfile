# Optional: used only if the deploy app's build type is set to "Dockerfile".
# Builds the site, then serves the static dist/ folder with nginx on port 80.
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
