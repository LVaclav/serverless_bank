exports.handler = async (event, context) => {
    try {
      const body = JSON.parse(event.body)
      console.log(body)
      return {
        statusCode: 200
      }
    } catch (err) {
      return { statusCode: 500, body: err.toString() }
    }
  }
  // webhook -> https://8be7-106-68-8-46.ngrok.io/.