const shortid = require('shortid');
const Url = require('../models/url')

const generateshortid =async(req,res)=>{
const shortno = shortid()
const body = req.body
if(!body.url){ res.json({status : "url is required"})}
await Url.create({
    shorturl : shortno,
    RedirectedUrl : body.url,
    visitedHistory : []
})

 return res.render("home",{
 shorturl :shortno
})

}

const getredirected = async(req,res)=>{
const shorturl= req.params.shorturl
 
const result = await Url.findOneAndUpdate({shorturl,}, {$push : { visitedHistory :{ timestamp : Date.now()}}})

res.redirect(result.RedirectedUrl)
}


const geturldetails = async(req,res)=>{
    const shorturl = req.params.shorturl
    const result =await Url.findOne({shorturl})

    res.json({total_counts : result.visitedHistory.length , history :result.visitedHistory})
}


module.exports ={generateshortid, getredirected,geturldetails }