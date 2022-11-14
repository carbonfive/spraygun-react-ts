FROM node:16.18.1-alpine
WORKDIR /app-prototype
COPY package.json yarn.lock ./
RUN npx yarn@1.22.17 install
COPY . .
RUN npm run build
EXPOSE 3000
ENV NODE_ENV=production
CMD npx --no-install serve -s
