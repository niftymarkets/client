## Nifty Markets Client

### URL

http://niftymarkets.herokuapp.com/

### About

This is the front-end for the Nifty Markets project, which is part of Lambda School Build Week.

### How to start

Clone this repository locally. Do not fork it. Once you clone the repo locally:

```
git checkout -b <lastname-firstname>
git push -u origin <lastname-firstname>
```

You will now be switched to Your branch, that you can start working on. You can do git push to send your commits to your remote on the server.

### Basic git flow

When you want to get your branch merged into the master branch, do the following:

```
git pull origin master
```

Look at your terminal messages. If there is a merge conflict, you will need to resolve it. If you don't know how to resolve it, please request assistance from Your Team Leader or PM

If there was no merge conflict, then proceed:

```
git push
```

And then go to your branch on github and create a pull request into the master branch. Remember to include Your Full Name in the branch title along with short notice with these info:

- what did You work on
- what feature was implemented
- what bug was fixed (if any)
- are there any issues with this code that needs to be addressed?

### Collaborating

If You are working on the frontend, remember to exchange information with another FR architect regarding feature implementions. Make sure to not duplicate Your work and plan out accordingly

If You are UI designer/developer remember to only push code and work in the `landing` folder. If there are more UI devs remember to talk out any major changes with them to not duplicate work.

### File Structure

This file is set up as a Node server, so that we can serve up the static landing page, and the SPA app from the same url. If you are working as User Interface on the landing page, you will work out of the /landing folder. If you are working as Front End Architect on the core front end application, you will work out of the /app folder, which has been initialized by Create-React-App.
