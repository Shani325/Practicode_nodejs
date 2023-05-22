
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    const sdk = require('api')('@render-api/v1.0#5yi85d37lhqedd36');

    sdk.auth('rnd_bXP3u4wp0ctlVx2CScL1FAriHxaZ');
    sdk.getServices({ limit: '20' })
        .then(({ data }) => res.send(data))
        .catch(err => console.error(err));

})

app.listen(3000)