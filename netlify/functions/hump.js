exports.handler = async (event, context) => {
    console.log(event)

    const axios = require('axios')
    
    const hump = await axios.get('https://fortnite-api.com/v2/stats/br/v2/bb1bc81537e944a7be353bd7157eb53e',{
        headers: {
            'authorization': 'b7ae0128-5100-48f1-af18-69858ea3d0c7'
        }});
    
    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(hump.data.data.stats.all.overall.kills)
    }
}