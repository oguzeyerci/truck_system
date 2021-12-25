global.express = require("express");
global.app = express();

const {pg_client} = require('./app/adapters/database/postgresql');