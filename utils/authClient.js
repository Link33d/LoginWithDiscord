const { Client } = require('@2pg/oauth');
const config = require('../config');
require("dotenv").config();

const client = new Client({
    id: config.client_id, 
    secret: process.env.SECRET,
    redirectURI: config.dashboard_url + config.redirect_uri,
    scopes: ['identify', 'guilds']
});

module.exports = client;