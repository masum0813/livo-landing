# syntax=docker/dockerfile:1.7

ARG BUILDPLATFORM=linux/amd64

FROM --platform=$BUILDPLATFORM node:20-alpine AS base
WORKDIR /app/docusaurus
COPY docusaurus/package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

FROM base AS dev
COPY docusaurus ./
COPY iptv ../iptv
EXPOSE 3000
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--port", "3000"]

FROM base AS build
COPY docusaurus ./
COPY iptv ../iptv
RUN npm run build

FROM node:20-alpine AS prod
WORKDIR /app/docusaurus
COPY docusaurus ./
COPY iptv ../iptv
COPY --from=build /app/docusaurus/build ./build
COPY --from=base /app/docusaurus/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "scripts/serve-static.mjs"]
