FROM node:16.15-alpine as builder
WORKDIR /app
COPY package*.json .
RUN yarn install
COPY . .
RUN yarn build

FROM node:16.15-alpine
WORKDIR /app
COPY --from=builder /app/build ./build
RUN yarn global add serve
ENTRYPOINT ["serve"]
CMD ["build"]