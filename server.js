const livereload = require('livereload');
const server = livereload.createServer({ extraExts: ["update"] });
server.watch(__dirname + "/.cache");