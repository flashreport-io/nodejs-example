# nodejs-example
Node.js script using Flashreport API

This application illustrates how our API can be accessed from a Node.js script application in the simplest and most straightforward way.

## Requirements

### API key

FlashReport uses an API key to secure its endpoints. Before you can run these samples, you must obtain your api key and
specify it in the code.

    var apiKey = 'PASTE YOUR API KEY HERE'

To obtain your API key

- Go to [FlashReport website] (http://flashreport.io)
- Register, it's free and does not require any payment information
- Log in, and get your API key from the _Control Panel_ screen
- Your free evaluation period lasts 30 days, and so does your api key

### Required software

To run this example application, you need

- [Node.js] (https://nodejs.org/)


## Running the sample

Install the request module if you do not already have it

	npm install -S request

After specifying your API key as described above, just execute the script

    node flashreport.js



      