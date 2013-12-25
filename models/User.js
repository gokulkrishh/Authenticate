var db = require('../lib/db'); //getting db file form lib we created before

// A schema is way to def structure of a collection
var UserSchema = new db.schema({
	username :{type:String,unique:true} //username is unique and type is string
	,password :type:String //password is string
})

// defining the mongoose.model as User with its Schema
var MyUser = db.mongoose.model('User',UserSchema);

//exports addUser to add user after form submit
module.exports.addUser = addUser; 

//creating a funz for addUser
function addUser (usr,pwd,callback) 
{
	var instance = new MyUser(); //creating a instance for Myuser that is User function and Schema
	instance.username = usr;
	instance.password = pwd;
	// saving with save function
	instance.save(function(err)
	{
		if(err) // if err pass error in callback funz
		{
			callback(err);
		}
		else // else instance in callback funz
		{
			callback(instance);
		}
	});
}
