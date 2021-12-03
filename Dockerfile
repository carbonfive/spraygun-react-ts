FROM node:16.13.1-alpine
WORKDIR /app-prototype
COPY package.json yarn.lock ./
RUN npx yarn@1.12.1 install --production
COPY . .
RUN DISABLE_ESLINT_PLUGIN=true npm run build
EXPOSE 3000
ENV NODE_ENV=production
CMD npx --no-install serve -s
