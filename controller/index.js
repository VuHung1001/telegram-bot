const {handleReceivedMessage} = require("./lib/telegram")

async function handler (req, method) {
    const {body} = req;
    if (body) {
        const messageObj = body.message
        await handleReceivedMessage(messageObj)
    }
    return
}

module.exports = {handler}