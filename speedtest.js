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

// Speedtest data
const speedTest = require('speedtest-net');
const test = speedTest({maxTime: 5000});
let results = {
    download: null,
    upload: null
};

let getResults = (tester) =>  new Promise(function(resolve, reject) {
    try {
        tester.on('data', data => {
            resolve(data.speeds);
        });
    } catch (err) {
        reject(err)
    }
})




async function updateResults(tester) {
    try {
        const data = await getResults(tester)
        results.download = data.download;
        results.upload = data.upload;
        console.log(results)
    } catch (err) {
        console.log("Error: ")
        console.log(err)
    }
}




async function postTweet(tester) {
    await updateResults(test);
    client.post('statuses/update', {status: `Down: ${results.download}. Up: ${results.upload}`})
    .then( tweet => console.log("Successfully posted!"))
    .catch( (err) => console.log(err))

}

postTweet(test)