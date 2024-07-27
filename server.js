import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = 4000

// Resolving dirnanme for ES module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Use the Client app
app.use(express.static(path.join(__dirname, '/client/dist')))

// Render client for any path
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/dist/index.html'))
})

app.listen(PORT, () => {
    console.log("Server run at port " + PORT)
})