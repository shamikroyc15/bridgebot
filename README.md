## 🚧 Setup

### 1. 🔒 Secrets

You will need a secret files to get this app running!

`secrets.json` - this can be found pinned in the slack channel for this project

```
  {
    "slackToken": <slack-token>,
    ...fireBaseCredentials
  }
```

### 2. 🛠 Install dependencies

```sh
$ npm install
```

### 3. ⚡️ Run the app

From your repo directory:

```sh
$ npm run dev
```

### 4. 🛤 Ngrok

This is an optional step. Only do this _if_ you need to provide a URL for slack to hit to call your endpoint.

Download and install [ngrok](https://ngrok.com/download). Try and make sure you install it to your `$PATH` so that you can run the `ngrok` command from any directory. Your path is _usually_ `/usr/local/bin`.

We need `ngrok` to tunnel our server running on `localhost` to the public internet so that we can develop locally with Slack. Slack doesn't allow us to hit `localhost` URLs so we have to use `ngrok`. Everytime you restart `ngrok` **your URL will expire and you will need to update it in Slack's bot configuration settings**.

Open a new terminal window or table and run:

```sh
$ ngrok http 3001
```

This will expose `localhost:3001` where our app is running to the public internet.

Go into BridgeBot dev in the Bridge slack workspace and update the intake URL.

## 💁 How the app works

Whenever the `<host-url>/poll-group` POST endpoint is hit, it will run the `pollGroup` function in `functions.js`. This can be hit through the `/test` slash command.

### 🛢 Database

We'll be using firebase for our database to store poll questions and results.

## 📝 Git Flow

To begin working on a codebase, you first need to fork the repository. Forking creates your own personal copy of a repository where you can freely create branches and make changes without affecting the original repository. After creating a fork, `git clone` the remote fork locally and `npm install` dependencies (you only need to do this once).

For our team git (work)flow, our goal is for our master branch to be an up-to-date, single source of truth. This means that when we start working on our features, we always branch off the latest master, and when we finish our feature, we merge back into master so the rest of the team immediately has access to the latest code. In git terms, the git flow looks like: pull, branch, commit, rebase, PR, merge:

1.  Get latest master. Make sure your local repository is up-to-date with the remote repository by pulling (`git pull <remote>`) the latest master.

2.  Create feature branch. Instead of adding our new commits directly to master, we branch (`git checkout -b <name of branch>`) off master and work on our feature in an isolated branch. The branch should only contain changes relevant to that feature. If you need to work on another feature or a bug fix, create a new branch. Try to give your branch a descriptive name like “feat/adds-login-page”.

3.  Commit work. “Save” your work as you go by making commits (`git add <file>`, then `git commit -m “your descriptive message"`) to your feature branch. As commits are added to the branch it’s best practice to push those changes to your remote fork frequently (`git push <remote> <branch>`).
4.  Rebase. As you work, integrate your changes with master regularly by rebasing (`git rebase <branch>`). Rebasing changes the base of your branch to the last commit on the branch you are rebasing against, then replays your commits on top of it. Essentially, git history is rewritten so that your work is always added to the latest master. Note that when you rebase you may find yourself resolving merge conflicts if someone worked on similar areas of the codebase.
5.  Have your code reviewed. When a branch is ready to be merged (after rebasing and pushing your latest changes), open a pull request on the original remote repository (not your fork) to start the review process. Have a colleague review your pull request, discuss changes, and make any agreed upon revisions.
6.  Merge into master. Once the changes have passed the review process, merge them into the master branch!
