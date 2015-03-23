var request = require('request');

var apiKey = 'PASTE YOUR API KEY HERE'
var password = ''

/**
 * Sample data we want to generate a PDF from
 * @type {{component name: string, date: string, purged: boolean, throughput: number}[]}
 */
var payload = [
        {
            "component name": "Cooling circuit valve H567",
            "date": "01/01/2015", "purged": false, "throughput": 180
        },
        {
            "component name": "Cooling circuit valve H567",
            "date": "02/01/2015", "purged": false, "throughput": 170
        },
        {
            "component name": "Cooling circuit valve H567",
            "date": "03/01/2015", "purged": true, "throughput": 210
        },
        {
            "component name": "Cooling circuit valve H567",
            "date": "04/01/2015", "purged": false, "throughput": 131
        },
        {
            "component name": "Cooling circuit valve H567",
            "date": "05/01/2015", "purged": false, "throughput": 138
        },
        {
            "component name": "Cooling circuit valve H567",
            "date": "06/01/2015", "purged": true, "throughput": 165
        },
        {
            "component name": "Cooling circuit valve H567",
            "date": "07/01/2015", "purged": false, "throughput": 117
        }
    ]
    ;

var options = {
    url: 'https://gateway.flashreport.io/api/v1/report/new?title=JavascriptExample',
    method: 'POST',
    auth: {
        user: apiKey,
        password: password
    },
    json: true,
    body: payload
}


request(options, function (err, res, body) {
    if (err) {
        console.log(err)
        return
    }
    console.log('\nYour report UUID is ' + body)

    reportInfo(body)
})

/**
 * Display information about a report identified by its uuid
 * @param uuid of the report, obtained from report generation POST request
 */
reportInfo = function (uuid) {
    var reportUrl = 'https://gateway.flashreport.io/api/v1/report/' + uuid;

    var reportOptions = {
        url: reportUrl,
        auth: {
            user: apiKey,
            password: password
        }
    }

    request(reportOptions, function (err, res, body) {
        if (err) {
            console.log(err)
            return
        }

        console.log('\nInformation about your report:\n')
        console.log(body)
        console.log('\nYou can use the downloadUrl in a browser to see the generated PDF.')
    })
}




