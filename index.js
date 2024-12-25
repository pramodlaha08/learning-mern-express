const express = require('express')
const app = express()
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

// app.use((req, res) => {
//     console.log('request received')

//     // res.send('Hello World!')

//     // res.send({
//     //     firstName: 'Pramod',
//     //     age: 19
//     // })

//     let code = "<h1>Fruits</h1><ul><li>Banana</li><li>Apple</li></ul>";
//     res.send(code);
// })


app.get('/', (req, res) => {
    res.send('you contacted root path');
})

app.get('/about', (req, res) => {
    res.send('you contacted about path');
})
app.get('/contact', (req, res) => {
    res.send('you contacted contact path');
})

app.get(`*`, (req, res) => {
    res.send('404 page not found');
})


app.post('/', (req, res) => {
    res.send('you sent a post request to root path')
})

app.post('/about', (req, res) => {
    res.send('you sent a post request to about path')
})

app.post('*', (req, res) => {
    res.send('you sent a post request to but page not found')
})
