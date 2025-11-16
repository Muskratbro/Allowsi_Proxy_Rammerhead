const { RammerheadProxy, addStaticFilesToProxy } = require('./src/server/index.js');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

// Add any static directories
addStaticFilesToProxy(app);

// Create proxy
const proxy = new RammerheadProxy({ /* default config */ });

// Start server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Rammerhead running on port ${PORT}`));
