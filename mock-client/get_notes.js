const client = require('./client')

client.logToFile({
    user: "jude",
    timestamp: "akuhd",
    event: "something"
}, (error, events) => {
    if (!error) {
        console.log('successfully fetch Events')
        console.log(events)
    } else {
        console.error(error)
    }
})