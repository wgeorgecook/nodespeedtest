'use strict';


// Speedtest data
const speedTest = require('speedtest-net');
const test = speedTest({maxTime: 5000});

async function getResults() {
    return new Promise(function(resolve) {
        test.on('data', data => {
            resolve(data.speeds);
        })
    })
}




async function updateResults() {
    const data = await getResults();
    const results = {
        download: data.download,
        upload: data.upload
    };
    console.log(results);
    return results;
}

// updateResults();


module.exports.getResults = getResults;