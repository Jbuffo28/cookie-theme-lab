const Express = require("express")
const app = Express()
const PORT = process.env.PORT || 5000;
const cors = require("express")
const cookieParser = require("cookie-parser")



app.use(cors())
app.use(Express.json())
// app.use(Express.urlencoded())
app.use(cookieParser())

app.get("/sever.js", (req, res) => {
    res.render()
})





app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})