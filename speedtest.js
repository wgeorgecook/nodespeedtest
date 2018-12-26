'use strict';


// Speedtest data
const speedTest = require('speedtest-net');


let getResults = () =>  new Promise(function(resolve, reject) {
    try {
        let test = speedTest({maxTime: 5000});
        test.on('data', data => {
            resolve(data.speeds);
        });
    } catch (err) {
        reject(err)
    }
})




async function updateResults() {
    let results = {
        download: null,
        upload: null
    };

    try {
        const data = await getResults()
        results.download = data.download;
        results.upload = data.upload;
        return results;
    } catch (err) {
        console.log("Error: ")
        console.log(err)
    }
}

// updateResults();


module.exports.updateResults = updateResults;