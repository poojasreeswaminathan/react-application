import "./database.js"
import {PostModule1}  from "./models.js"
import post from "./post.json" with {type:"json"}
PostModule1.insertMany(post).then(()=>{
    console.log("Inserted Successfully")
}).catch(error=>{
    console.error("Insert failed",error)
})