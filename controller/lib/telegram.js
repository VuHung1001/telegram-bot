const { axiosInstance } = require("./axios")

function sendMessage(messageObj, messageText) {
    return axiosInstance.get( "sendMessage" , {
        chat_id: messageObj.chat.id,
        text: messageText
    })
}

function handleReceivedMessage(messageObj) {
    const messageText = messageObj.text || "";

    if (messageText.charAt(0) === "/") {
        const command = messageText.substr(1)

        switch (command) {
            case "start":
                return sendMessage(
                    messageObj,
                    "Xin chào, tôi có thể giúp gì cho bạn"
                )

            default: 
                return sendMessage(messageObj, "Tôi không hiểu lệnh này của bạn")
        }
    } else {
        return sendMessage(messageObj, messageText)
    }
}

module.exports = {handleReceivedMessage}