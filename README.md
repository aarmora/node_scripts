# node_scripts

This is a simple repository to teach Chad how to code some ninja JS.

###Downloads
[git](https://git-scm.com/) (leave everything clicked)
[vscode](https://code.visualstudio.com/) (text editor)
[node](https://nodejs.org/en/) (install for nodejs, which will run our js)



###Git commands
After git is installed, open up git bash and use the commands below.  

`git clone https://github.com/aarmora/node_scripts.git`

This will download the repository to your computer and create the directory.  You should be able to `$ cd node_scripts` after this it finishes.

You will use git to send your files up to the repository so I (or whoever you are collaborating with) can access them.  Git is not really coding, it's just a way to track changes on files and merge them with others.  
Other helpful git commands:

```
git add .
git commit . -m "your message here"
git push origin master
git pull origin master
```

Alright, I have two basic scripts in here.  One takes prompts and then does some summation.  The other sends a message in to slack.

Once you are in the node_scripts directory, you should be able to run the scripts with a simple `node <scriptname>`.  In this case, `node addition_script.js`.

There are some fairly complicated stuff in there, so maybe just start with subtraction of the numbers and adding prompts to send custom messages into slack.

