import express from 'express'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(PORT, () => {
    console.log(`Digg server started on port ${PORT}`)
})
