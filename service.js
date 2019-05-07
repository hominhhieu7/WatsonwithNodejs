const AssistantV1 = require('watson-developer-cloud/assistant/v1');

const assistant = new AssistantV1({
    username: process.env.WATSON_USERNAME ,
    password: process.env.WATSON_PASSWORD,
    url: "https://gateway-tok.watsonplatform.net/assistant/api",
    version: "2018-02-16"
})

exports.getMessage = body => {
    return new Promise((resolve, reject) => {
        assistant.message({
            workspace_id: process.env.WATSON_WORKSPACE_ID,
            input: { text: body.name }
        },
            function (err, response) {
                if(err){
                    console.log(err);
                    reject(err);
                }
                else {
                    console.log(response.output.text);
                    
                    resolve(response.output.text);
                }
            }
        );
    });
}