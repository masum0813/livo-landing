# syntax=docker/dockerfile:1.7

ARG BUILDPLATFORM=linux/amd64

FROM --platform=$BUILDPLATFORM node:20-alpine AS base
WORKDIR /app/docusaurus
COPY docusaurus/package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

FROM base AS dev
COPY docusaurus ./
EXPOSE 3000
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--port", "3000"]

FROM base AS build
COPY docusaurus ./
RUN npm run build

FROM node:20-alpine AS prod
WORKDIR /app/docusaurus
COPY docusaurus ./
COPY --from=build /app/docusaurus/build ./build
COPY --from=base /app/docusaurus/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0", "--port", "3000"]
