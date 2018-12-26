# An Internet Speed Test for Node

Do you question if you're really getting the internet speeds you pay for? Do you wish you could let your ISP know when speeds dip below acceptable values? With this little app, you have some scaffolding to start off with!

## Installation
Clone the repository and run `npm insall` to download dependencies. Set `node speedtest.js` in a scheduled task to have node this app check your speed test and tweet the results.

## Some Caveats
I did not build any logic to include when the bot will tweet, nor which account to tweet to. Though I presume this would be the best use for the bot, I only built in the ability to check the speeds and tweet them from an account. You'll need to put a speed threshold check in the logic, and change the tweet string to say whatever you'd like (and to whom you'd like to tweet at!).

## Configuration
Rename `settingsTemplate.json` to `settings.json` and paste your access tokens from Twitter in their respective values. The `speedtest.js` will use those values to authenticate to Twitter when it goes to post a tweet.