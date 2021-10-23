# Discord oauth2 sample site
This is just a basic site to help people log in with discord!
Below you will find instructions on how to use!
this site is not meant to be big or pretty, it's just for you to learn the basics.

## Setup

### configuring file
Go to the `config.js` file and fill in the information:
```js
module.exports = {
    "dashboard_url": "http://localhost:8000",
    "redirect_uri": "/login/callback",
    "client_id": "<client id>",
    "cookie_name": "client"
}
```
create the `.env` file and fill in the information:
```env
TOKEN=<clientToken>
SECRET=<clientSecret>
```
How do you do this?
- [client id](#client_id)
- [client secret](#client_secret)
- [client token](#client_token)

### Configuring the redirect URL
Add your `dashboard_url` and` redirect_uri` to the oauth tab of the discord panel.
+ http://localhost:8000/login/callback

[How do you do this?](#redirect)

I'm using the example template, it's your choice, but it needs to be the same one added to the discord panel in the oauth2 tab

### Install and Run
`npm i` - install all packages
`npm start` - simples node execution
`npm run dev` - node running with nodemon

## How do you do this
### client_id
In the **[Developer Portal](https://discord.com/developers)** -> Your Application -> General Information
![client id](https://media.discordapp.net/attachments/727335289072386109/901550534815776808/unknown.png)

### client_secret
In the **[Developer Portal](https://discord.com/developers)** -> Your Application -> Oauth2
![client secret](https://media.discordapp.net/attachments/727335289072386109/901550145634730014/unknown.png)

### client_token
In the **[Developer Portal](https://discord.com/developers)** -> Your Application -> Bot
![client token](https://media.discordapp.net/attachments/727335289072386109/901550346789322762/unknown.png)

### redirect
In the **[Developer Portal](https://discord.com/developers)** -> Your Application -> Oauth2 -> Add Another -> text box -> Save Changes
![redirect](https://media.discordapp.net/attachments/727335289072386109/901549877715157002/unknown.png)