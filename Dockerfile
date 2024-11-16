# Use the official Node.js v22 image as a base image
FROM node:22

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Set environment variable to serve production build
ENV NODE_ENV=production

# Install a simple HTTP server to serve the static files
RUN npm install -g serve

# Expose port 3000 to the outside world
EXPOSE 3000

# Serve the build folder on port 3000
CMD ["serve", "-s", "build", "-l", "3000"]
