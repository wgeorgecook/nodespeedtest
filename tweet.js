'use strict';

// Twitter data
const Twitter = require('twitter');
const settings = require('./settings')
const client = new Twitter({
  consumer_key:         settings.consumer_key,
  consumer_secret:      settings.consumer_secret,
  access_token_key:     settings.access_token,
  access_token_secret:  settings.access_token_secret,
});

const speedtest = require('./speedtest')

async function postTweet() {
    try {
        const results = await speedtest.updateResults();
        client.post('statuses/update', {status: `Down: ${results.download}. Up: ${results.upload}`})
        .then( tweet => console.log("Successfully posted!"))
        .catch( (err) => console.log(err))

    }
    catch(err) {
        console.log("Error: ")
        console.log(err)
    }

}

postTweet()