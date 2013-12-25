// connection to db
var mongoose = require('mongoose'); //getting mongoose module and storing its ref in var mongoose
var Schema = mongoose.Schema; /* adding mongoose.Scheme to Scheme var
Schema is used to def the structure of a collection */

//exports the mongoose and Schema module
module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

//connection to cloud DB

var username= "gokul"; //username for MongoLab
var password = "gokulkrishh"; //password
var addr = "@ds061288.mongolab.com:61288/demo_db"; //address to MongoLab
connect();

// connection to MongoDB
function connect () 
{
	var url = 'mongodb://' + username + ':' + password + addr;
	mongoose.connect(url); //connection with mongoose module
}
function disconnect()
{
	mongoose.disconnect()
}
