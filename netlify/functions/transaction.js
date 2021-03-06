
exports.handler = async (event, context) => {
    console.log(event)

    const axios = require('axios')
    
    const trans = await axios.get('https://api.up.com.au/api/v1/transactions?page[size]=1',{
        headers: {
            'authorization': 'Bearer up:yeah:BYET2CR0T5qqYHBGlOatubPzE8atF2uG4H7DglYl2mVaie5ICYMxca5bQBxTR4NbDWPI7KbuzkAsOtAs4O4RLSCPQjMDkhdQ3fRXFGtwY70q148VUuTXWpMyjY6Du0jg'
        }});

    
    let payload = {}
    payload.value = trans.data.data[0].attributes.amount.value
    payload.description = trans.data.data[0].attributes.description
    payload.createdAt = trans.data.data[0].attributes.createdAt
    payload.message = trans.data.data[0].attributes.message
    payload.rawText = trans.data.data[0].attributes.rawText

    
    
    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
        
    }
    
}

