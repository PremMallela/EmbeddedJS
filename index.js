import express from "express"
import {dirname} from "path"
import { fileURLToPath } from "url";

const port = 3000
const app = express()
let dayQuote

const __dirname = dirname(fileURLToPath(import.meta.url))   /*this absolute path getter is'nt required here,because the path is hard coded already by the express in render functions' first param/option,or
                                             other words the render function expects its first param to be the filename in the view directory
                                             By default, Express looks for views in a directory called "views" in the root directory of your application*/
function getDay(day){
    switch (day) {
        case "1":
            case "2":
                case "3":
                     case "4":
                        case "5" :
                        return "Hey its week Day,Work Hard";
        case "6":
        case "7" :
            return "Hey its weekend, enjoy it!"
        default:
        return "Invalid day!";
    }
}
function getQuote(req,res,next){
    let day = req.body.dayOfTheWeek;
    console.log(req.body)
    dayQuote = getDay(day);
    next()
}

app.use(express.urlencoded({extended: true})) //middleware that populates the body of the request(Post ,most importantly),which was left undefined previously

app.use(getQuote)           //middleware that populates the quote according to the day in the global variable "dayQuote"

app.set('views','view')     //Modified the generic path used by the express framework to render ejs files

app.get('/',(req,res)=>{
    res.render("index.ejs")
})

app.post("/submit",(req,res)=>{ 
     res.render("index.ejs",{
        name : dayQuote
     })
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})



