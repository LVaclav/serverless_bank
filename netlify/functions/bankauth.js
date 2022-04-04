

exports.handler = async (event, context) => {
    console.log(event)

    const axios = require('axios')
    
    const resp = await axios.get('https://api.up.com.au/api/v1/accounts/5df699ec-eebb-4146-a5a5-16141a6209b1',{
        headers: {
            'authorization': 'Bearer up:yeah:BYET2CR0T5qqYHBGlOatubPzE8atF2uG4H7DglYl2mVaie5ICYMxca5bQBxTR4NbDWPI7KbuzkAsOtAs4O4RLSCPQjMDkhdQ3fRXFGtwY70q148VUuTXWpMyjY6Du0jg'
        }});

    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resp.data.data.attributes.balance.value)
    }

    
}

