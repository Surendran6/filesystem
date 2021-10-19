import express from "express";
import fs from "fs";
import moment from "moment"

const app = express();
const PORT = process.env.PORT ||5000;

var timestamp = moment('2015-07-12 14:59:23', 'YYYY-MM-DD HH:mm:ss').valueOf()
console.log(timestamp)

//text file is create
fs.writeFile('./testdata/date-time.txt','1634662943',(err)=>{
    if(err){
        return console.log(err);
    }
    console.log("the file is saved")
})

app.get('/',(req,res)=>{
    fs.readdir('./testdata',(error,folder)=>{
        if(error){
            return console.log(err);
        }
        var result ='';
        var reg = /^[a-zA-Z0-9-]*$/;

        folder.map(file=>{
            if(file.match('.json')){
                result+=`
                <th>
                <img src="https://cdn.iconscout.com/icon/free/png-512/json-file-1-504451.png" alt="json" width="75" height="75">
                <br>${file}&emsp;
                </th>`
            }
            if(file.match('.txt')){
                result+=`
                <th><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/.docx_icon.svg/1200px-.docx_icon.svg.png" alt="docx" width="75" height="75">
                <br>${file}&emsp;</th>`
            }
            if(file.match('.jpg')){
                result+=`
                <th>
                <img src="https://image.flaticon.com/icons/png/512/136/136524.png" alt="json" width="75" height="75">
                <br>${file}&emsp;
                </th>            
                `
            }
            if(file.match('.mp4')){
                result+=`
                <th>
                <img src="https://image.flaticon.com/icons/png/512/136/136545.png" alt="json" width="75" height="75">
                <br>${file}&emsp;
                </th>            
                `
            }
            if(file.match(reg)){
                result+=`
                <th>
                <img src="https://img.icons8.com/emoji/452/open-file-folder-emoji.png" alt="json" width="75" height="75">
                <br>${file}&emsp;
                </th>            
                `
            } 
        })
        result =`<table><tr>${result}</tr></table>`
        res.send(result)
    })
})


app.listen(PORT,()=>console.log("server is working now:  " + PORT))
