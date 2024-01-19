# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Build the TypeScript project (if you are using TypeScript)
RUN npm run build

# Make port available to the world outside this container
EXPOSE 3000

# Define the command to run your app
# Use "dist/index.js" if you are compiling TypeScript to JavaScript
CMD [ "node", "dist/index.js" ]
