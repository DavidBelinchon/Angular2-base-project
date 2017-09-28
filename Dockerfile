FROM node
COPY node-server /server
EXPOSE 3000
WORKDIR /server
CMD node app.js