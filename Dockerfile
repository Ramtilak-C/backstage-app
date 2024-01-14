FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

# Copying the application code to the container
COPY . .
COPY test.yaml .
RUN npm run build

# Exposing the port on which the app runs
EXPOSE 3000
CMD ["npm", "start"]
