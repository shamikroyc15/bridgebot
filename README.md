## 🚧 Setup

### 🛤 Ngrok

Download and install [ngrok](https://ngrok.com/download). Try and make sure you install it to your `$PATH` so that you can run the `ngrok` command from any directory. Your path is _usually_ `/usr/local/bin`.

We need `ngrok` to tunnel our server running on `localhost` to the public internet so that we can develop locally with Slack. Slack doesn't allow us to hit `localhost` URLs so we have to use `ngrok`. Everytime you restart `ngrok` **your URL will expire and you will need to update it in Slack's bot configuration settings**.

### 🛠 Install dependencies

```sh
$ npm install
```

### 🔒 Secrets

You will need two secret files to get this app running

`secrets.json`

```
  {
    "slackToken": <slack-token>
  }
```

`firebase-credentials.json` - this can be found pinned in the slack channel for this project

### ⚡️ Run the app

From your repo directory:

```sh
$ npm run dev
```

Open a new terminal window or table and run:

```sh
$ ngrok http 3001
```

This will expose `localhost:3001` where our app is running to the public internet.

Go into BridgeBot dev in the Bridge slack workspace and update the intake URL.

## 💁 How the app works

Whenever the `<host-url>/poll-group` POST endpoint is hit, it will run the `pollGroup` function in `functions.js`. This can be hit through the `/test` slash command.

### 🛢 Database

We'll be using firebase for our database to store poll questions and results. Add the `firebase-credentials.json` secret file to the root of this repo to connect to the database.
