const router = require("Express").Router()

document.getElementById(darkMode).addEventListener("click", changeMode.body.darkMode){
    fetch ("/dark-mode", (req, res) => {
        getElementById(darkMode)
    })
}

document.getElementById(lightMode).addEventListener("click", changeMode.body.lightMode){
    fetch ("/light-mode", (req, res) => {
        getElementById(darkMode)
    })
}


router.get("/setcookie", (req, res) => {
    res.cookie("theme", "dark-mode"
})


router.get("/setcookie", (req, res) => {
    res.cookie("theme", "light-mode"
})

document.cookie
    console.log(cookie)

// response.cookie("theme", "light-mode")

// response.cookie("theme", "dark-mode")

module.exports = router