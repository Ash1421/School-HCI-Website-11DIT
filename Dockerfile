# Use an official lightweight Nginx image
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static files
RUN rm -rf ./*

# Copy website files into the container
COPY Koln.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Copy all images into the container
COPY Images /usr/share/nginx/html/Images

# Set the environment variable for the custom port (default 57854)
ENV CUSTOM_PORT=57854

# Expose the port that will be used
EXPOSE $CUSTOM_PORT

# Start nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
