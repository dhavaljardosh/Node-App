const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKe);


console.log("Check this key mofo " +keys.stripeSecretKey);
module.exports = app => {
  app.post('/api/stripe', (req,res) => {
    console.log(req.body);
    
  });
};
