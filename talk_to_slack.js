var Slack = require('node-slack'); //Installed with 'npm install node-slack'
var prompt = require('prompt'); //Installed with 'npm install prompt'


//This is the url that pipes into our slack
var url = "https://hooks.slack.com/services/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";

var slack = new Slack(url);


//See other options here - https://www.npmjs.com/package/node-slack
slack.send({
    text: "I am sending from node",
    username: "Node Bot"
})