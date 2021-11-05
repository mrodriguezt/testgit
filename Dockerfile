FROM node:12-alpine3.11 AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN apk add --update --no-cache alpine-sdk
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools
WORKDIR /app
COPY package.json ./
RUN yarn install --network-concurrency 1
FROM node:12-alpine3.11 AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
ENV BASE_URL="https://apistaging38472.suzukiecuador.com"
ENV BASE_URL_IMG=""
ENV GMAPSAP="AIzaSyBTmEnQaciLiDZyivA_WPKqP-hpBkZhFSE"
ENV NEXT_PUBLIC_REST_API=https://dig.awsapi.info/api/datafast
ENV NEXT_PUBLIC_ShopperResultUrl=https://staging38472.suzukiecuador.com/exito
ENV NEXT_PUBLIC_API_SUCCESS_RESPONSE=000.100.110
ENV NEXT_PUBLIC_PAYMENT_API_KEY=D6v5VUEI7CLGIXxf6h4IMMOoXMF6sw3O
ENV CAMPANIA_TEST_DRIVE="d30083ee-010c-11ec-9447-06d6964841fc"
ENV CAMPANIA_COTIZACION="331d9da4-0110-11ec-889e-06d6964841fc"
ENV CAMPANIA_CONTACTO="0e1b661c-0110-11ec-be47-06d6964841fc"
ENV CAMPANIA_AGENDAR_CITA="d30083ee-010c-11ec-9447-06d6964841fc"
ENV SUGAR_CRM_TOKEN="31|bTwC10rnF8rarmyJddTWVeN4MUx34Y3bCCy1pMnh"
ENV DOMAIN="suzukiecuador.com"
RUN yarn build
FROM node:12-alpine3.11 as runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./
USER nextjs
EXPOSE 3000
CMD ["yarn","start"]
