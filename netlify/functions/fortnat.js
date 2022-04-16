exports.handler = async (event, context) => {
    console.log(event)

    const axios = require('axios')
    
    const bryn = await axios.get('https://api.fortnitetracker.com/v1/powerrankings/pc/Oceania/ManMol3ster',{
        headers: {
            'authorization': '9e23a2c6-0e63-4795-8009-79ebeba8520a'
        }});
    
    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bryn)
    }
}

