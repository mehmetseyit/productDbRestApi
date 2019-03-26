let ProductModel = require('../models/product.model')
let express = require('express')
let router = express.Router()

// Create a new customer
// POST localhost:3000/customer
router.post('/product', (req, res) => {
  if(!req.body) {
    return res.status(400).send('Request body is missing')
  }

/*

  // Controls here 
  if(!req.body.email) {
    // ...
  }
*/


  // let user = {
  //   name: 'firstname lastname',
  //   email: 'email@gmail.com'
  // }

  let model = new ProductModel(req.body)
  model.save()
    .then(doc => {
      if(!doc || doc.length === 0) {
        return res.status(500).send(doc)
      }

      res.status(201).send(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

/*


// GET
router.get('/product', (req, res) => {
  if(!req.query.email) {
    return res.status(400).send('Missing URL parameter: email')
  }

  CustomerModel.findOne({
    email: req.query.email
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// UPDATE
router.put('/product', (req, res) => {
  if(!req.query.email) {
    return res.status(400).send('Missing URL parameter: email')
  }

  CustomerModel.findOneAndUpdate({
    email: req.query.email
  }, req.body, {
    new: true
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// DELETE
router.delete('/product', (req, res) => {
  if(!req.query.email) {
    return res.status(400).send('Missing URL parameter: email')
  }

  CustomerModel.findOneAndRemove({
    email: req.query.email
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

*/

module.exports = router