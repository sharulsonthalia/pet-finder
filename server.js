const express = require('express')
const app = express()
const pets = require('./data.js')

//Quesstion 1
app.get('/pets', (req,res)=> {
    const petDetails = pets.map((pet) => 
    `<h1> Name: ${pet.name} </h1>
    <h3> Age: ${pet.age} </h3>
    <h3> Breed: ${pet.breed} </h3>
    <h3> Owner: ${pet.owner} </h3>
    `).join('')
    res.send(petDetails)
})

//Question 2
app.get('/pets/:name', (req, res) => {
    const petName = req.params.name
    const singlePet = pets.find(pet => pet.name.toLowerCase() === petName.toLowerCase())
    if(!singlePet) {
        res.send(`error man`)
    } else {
    const petDetails = `
    <h1> Name: ${singlePet.name} </h1>
    <h3> Age: ${singlePet.age} </h3>
    <h3> Breed: ${singlePet.breed} </h3>
    <h3> Owner: ${singlePet.owner} </h3>`
    res.send(petDetails)}
})

//Question 2
app.get('/pets/owner', (req, res) => {
    res.send(`req.query.owner`)}
)


const PORT = 8080
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

