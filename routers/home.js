const express = require("express");
const router = express.Router();
const authClient = require("../utils/authClient");
const config = require("../config");
const client = require("../utils/discordClient")
const sessions = require('../utils/sessions')
router.get("/", async (req, res) => {
    const key = res.cookies.get(config.cookie_name) ?? req.get('Authorization');
    let user;
    if (key) {
        let { authUser } = await sessions.get(key)
        user = client.users.cache.get(authUser.id)
    } else {
        user = null
    }
    res.status(200).render("home", {
        user: user
    });
});

router.get("/dashboard", async (req, res) => {
    const key = res.cookies.get(config.cookie_name) ?? req.get('Authorization');

    if (!key) return res.send('<script>alert("You must be logged in to enter this area!"); window.location.href = "/login";</script>')

    let { authUser } = await sessions.get(key)
    let user = client.users.cache.get(authUser.id)

    if (!user) return res.send('<script>alert("An error occurred, please try again later!"); window.location.href = "/login";</script>')

    res.status(200).render("dashboard", {
        user: user
    });
});

module.exports = router;
