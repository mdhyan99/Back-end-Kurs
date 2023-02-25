const http = require("http");
const server = http.createServer((req,res)=>{
    if (req.url ==='/'){
        res.write(`
        <h1>Password generator </h1>
        <form action ='/getPassword'>
        <input type='number' name ='length' placeholder="password length" />
        <button type="submit"> Get my password</button>
        </form> `)
    }
    if(req.url.includes('/getPassword')) {
        const length = req.url.slice('/getPassword?length='.length,req.url.length)
        const letters =['a','b','c']
        let password =''
        for(let i=0;i<length;i++){
            const randomIndex =Math.round(Math.random()*(letters.length-1))
            password += letters[randomIndex]
        }
        res.write(password)
    }
    res.end()   
})
server.listen(5000)  