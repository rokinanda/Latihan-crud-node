const express = require('express')
const router = express.Router()
const Contact = require('../db/db')


router.get('/', async (req, res) => {
  const data = await Contact.find()
  res.status(200).json(data)
})

router.get('/:nama', async (req, res) => {
  const data = await Contact.findOne({nama: req.params.nama})
  res.status(200).json(data)
})

router.post('/', async (req, res) => {
  const add = await Contact.insertMany(req.body)  
  res.json(add)
})

router.put('/:nama', async (req, res) => {
  const { _id, nama, email, nohp } = req.body
  const change = await Contact.updateOne(
    {
      nama: req.params.nama
    }, 
    {
      $set: {
        nama,
        email,
        nohp
      }
    }
  )  
  res.json(change)
})

router.delete('/:nama', async (req, res) => {
  const hapus = await Contact.deleteOne({nama: req.params.nama})
  res.json(hapus)
})

module.exports = router