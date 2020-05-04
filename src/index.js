const express = require('express');
const bubbleSort = require('./bubbleSort')
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.send('backend funcionando...')
})

app.post('/', (req, res) => {
    const { array } = req.body;

    const sorted = bubbleSort(array);

    return res.send({sorted});
})

app.listen(3333);