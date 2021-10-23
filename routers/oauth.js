const express = require("express");
const jwt = require('jsonwebtoken');
const router = express.Router();
const config = require("../config");
const authClient = require("../utils/authClient");

router.get("/login", async (req, res) => {
    if (req.cookies.get(config.cookie_name)) return res.send('<script>alert("You are already connected to your discord account!"); window.location.href = "/";</script>')
    res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${config.client_id}&redirect_uri=${config.dashboard_url + config.redirect_uri}&response_type=code&scope=identify%20guilds`)
});

router.get("/login/callback", async (req, res) => {
    const code = req.query.code;
    if (!code) return res.send('<script>alert("An error occurred, please try again later!"); window.location.href = "/";</script>')
    try {
        const key = await authClient.getAccess(code);
        res.cookies.set(config.cookie_name, key)
        res.redirect('/');
    } catch (err) {
        res.send('<script>alert("An error occurred, please try again later!"); window.location.href = "/";</script>')
    }
});

router.get('/logout', async (req, res) => {
    if (!req.cookies.get(config.cookie_name)) return res.send('<script>alert("You are not logged into your discord account yet!"); window.location.href = "/";</script>')
    try {
        res.cookies.set(config.cookie_name, "");
        res.redirect('/');
    } catch(err) {
        res.send('<script>alert("An error occurred, please try again later!"); window.location.href = "/";</script>')
    } 
});

module.exports = router;
