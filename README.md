# MMB_PayParty
Payment for MM Bacherlor party

First time only:<br>
```
npm install
```

To deploy dev environment:<br>
```
mongod --dbpath=./data
nodemon
```
Note: you must have a directory /data inside your repo

If mongodb doesn't run:<br>
```
sudo service mongodb stop 
```

Since git-lfs is being used, github will ask for authentication multiple times when pulling/pushing/cloning etc.<br>
Run the following command for Linux systems to remember your credentials for 15 min once you input it once:<br>
```
git config --global credential.helper cache
```
For more information go to:<br>
https://help.github.com/articles/caching-your-github-password-in-git/#platform-linux
