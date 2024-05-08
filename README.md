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
Add your `dashboard_url` and `redirect_uri` to the oauth tab of the discord panel.
+ http://localhost:8000/login/callback

[How do you do this?](#redirect)

I'm using the example template, it's your choice, but it needs to be the same one added to the discord panel in the oauth2 tab

### Install and Run
+ `npm i` - install all packages
+ `npm start` - simples node execution
+ `npm run dev` - node running with nodemon

## How do you do this
### client_id
In the [Developer Portal](https://discord.com/developers) -> Your Application -> General Information
![image](https://github.com/Link33d/LoginWithDiscord/assets/64251230/aa25c5ef-e7db-47be-90ac-0739539da805)

### client_secret
In the [Developer Portal](https://discord.com/developers) -> Your Application -> Oauth2
![image](https://github.com/Link33d/LoginWithDiscord/assets/64251230/201dee27-59ed-4956-8d36-f9771c0420be)

### client_token
In the [Developer Portal](https://discord.com/developers) -> Your Application -> Bot
![image](https://github.com/Link33d/LoginWithDiscord/assets/64251230/af77665c-b22c-461a-ac31-cf43cc73e5f6)

### redirect
In the [Developer Portal](https://discord.com/developers) -> Your Application -> Oauth2 -> Add Another -> text box -> Save Changes
![image](https://github.com/Link33d/LoginWithDiscord/assets/64251230/cdcf8aa0-7cf0-47c7-9a95-da994b55010f)
