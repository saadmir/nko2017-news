# Tells the Docker which base image to start.
FROM node

# Adds files from the host file system into the Docker container.
COPY . /news

# Sets the current working directory for subsequent instructions
WORKDIR /news

RUN npm install
RUN npm run build:prod

#expose a port to allow external access
EXPOSE 3000
EXPOSE 4040

CMD ["npm", "run", "start:prod"]