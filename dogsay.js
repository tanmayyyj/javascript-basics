const cowsay = require("cowsay");
const inspire = require("inspirational-quotes");


const text = inspire.getQuote().text

console.log(
    cowsay.say({
        text : text,
        e : "OoO",
        T : "W"
    })
)