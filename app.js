const express = require('express')
const app = express()

const pg_client  = require('./app/adapters/database/postgresql')
const vehicleRoute  = require('./app/routes/vehicleRoute')
const deviceRoute  = require('./app/routes/deviceRoute')
const deviceTypeRoute  = require('./app/routes/deviceTypeRoute')
const logTemperatureRoute  = require('./app/routes/logTemperatureRoute')
const logLocationRoute  = require('./app/routes/logLocationRoute')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/',(req,res)=>{
    console.log("Ana Sayfa")
    res.send("<h2>Seçenekler:</h2>" +
        "<h2>/vehicle</h2> " +
        "<h2>/device</h2> " +
        "<h2>/deviceType</h2> " +
        "<h2>/logTemp</h2> " +
        "<h2>/logLocation</h2>")
})
// const listem=[
//     {id: 1,isim:"oguz",yas:31},
//     {id: 2,isim:"onur",yas:12},
//     {id: 3,isim:"ali",yas:42},
//     {id: 4,isim:"mehmet",yas:72}
// ]
// app.get('/oguz',(req,res)=>{
//     res.send(listem)
// })
// app.get('/oguz/:id',(req,res)=>{
//     console.log(req.params.id)
//     const user = listem.find(x => x.id === Number(req.params.id))
//     if(user){
//         res.send(user)
//     }
//     else{
//         res.send("user yok")
//     }
// })
//
// app.post('/oguz',(req,res)=>{
//     console.log(req.body)
//     const newuser = {
//         id : req.body.id ,
//         isim : req.body.isim ,
//         yas : req.body.yas
//     }
//     listem.push(newuser)
//     res.send(newuser)
// })
//
// app.put('/oguz/:id',(req,res)=>{
//     console.log(req.params)
//     const user = listem.find(x => x.id === Number(req.params.id))
//     if(user){
//         user.isim = req.body.isim
//         user.yas = req.body.yas
//
//         res.send(user)
//     }
//     else{
//         res.status(404).send(`${req.params.id} idli user yok`)
//     }
// })
//
// app.delete('/oguz/:id',(req,res)=>{
//     console.log(req.params)
//     const user = listem.find(x => x.id === Number(req.params.id))
//     if(user){
//         const index = listem.indexOf(user)
//         listem.splice(index,1)
//
//
//         res.send(user)
//     }
// })

app.use('/vehicle',vehicleRoute)
app.use('/device',deviceRoute);
app.use('/deviceType',deviceTypeRoute);
app.use('/logTemperature',logTemperatureRoute);
app.use('/logLocation',logLocationRoute);


app.listen(3000)
