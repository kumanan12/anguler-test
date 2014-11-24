/**
 * Created by kmurugesan on 11/24/2014.
 */
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/sportsstore');
var db=mongoose.connection;
db.on('error',console.error.bind(console, 'connection error ...'));
db.once('open', function callback () {
    console.log('Coonected to db')
});
var Product = mongoose.model('Product', {name: 'string',description: 'string',category:'string',price: 'number'});


/*
var product=new Product({name:'Basketball', description:'mens basket ball', category:'basketball', price: 28.5})
product.save(function (err,doc) {
    if(err){
        return console.error(err);
    }
    console.log("id" + doc._id)
});*/

Product.findOne({ 'name': 'Basketball' }, 'name description price', function (err, doc) {
    if (err) return handleError(err);
    console.log('%s %s is a %s.', doc.name, doc.description, doc.price) // Space Ghost is a talk show host.
})
