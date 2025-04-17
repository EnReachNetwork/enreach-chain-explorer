FROM node:18-alpine AS runner

WORKDIR /app

COPY dist dist
COPY server.js server.js
COPY distpkg.json package.json
RUN npm install
RUN ls -a
EXPOSE 3000
CMD ["node", "server.js"]