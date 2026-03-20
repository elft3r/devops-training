FROM node:lts

WORKDIR /app

EXPOSE 3000 35729
COPY --chown=node:node ./ /app
RUN yarn install \
  && yarn cache clean

USER node

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1

CMD ["yarn", "start"]
