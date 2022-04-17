exports.handler = async (event, context) => {
    console.log(event)

    const axios = require('axios')
    
    const bryn = await axios.get('https://fortnite-api.com/v2/stats/br/v2/ea5b3afe64204e88b427810cc4445aec',{
        headers: {
            'authorization': 'b7ae0128-5100-48f1-af18-69858ea3d0c7'
        }});
    
    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bryn.data.data.stats.all.overall.kills)
    }
}

