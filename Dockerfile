# Dockerfile.build

# Use a lightweight web server to serve the built static files
FROM nginx:alpine

# Remove the default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output to the nginx web server directory
COPY ./build /usr/share/nginx/html

# Expose the default HTTP port
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]