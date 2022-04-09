const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1382870",
  key: "e97d9b08c41bd951e219",
  secret: "1b884675e10fd3461467",
  cluster: "ap1",
  useTLS: true
});



exports.handler = async (event, context) => {
    try {
      const bodytext = (event.body)
      console.log(bodytext)
      pusher.trigger("bankauth", "my-event", {
        message: bodytext
      });
      return {
        statusCode: 200
      }
    } catch (err) {
      return { statusCode: 500, body: err.toString() }
    }
  }

  
  // webhook -> https://8a79-120-16-236-208.ngrok.io/
  // webhook -> http://5b45-106-68-8-46.ngrok.io