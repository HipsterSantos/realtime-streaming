var animalSchema  = new Schema({
  name: {type: String ,index:true,required: true},
  age: {type: Number}
})

animalSchema.methods =  function searcForType(receiver){
  var this.model('Animal').find({type:''},receiver)
}
animalSchema.statics.search = function search(name,cb){
  return this.where('name', new RegExp(name, 'i')).exec(cb);
}
//creating a model
var Animal  = mongoose.model('Animal',animalSchema);
function fecher(val){
  console.log(val)
}
Animal.searchForType(fetcher);
Animal.search('Rover', function (err) {
  if (err) ...
})

// Using plugin on mongodb
module.exports = exports = function lastModifiedPlugin(schema,option){
  schema.add({lastMod: Date});
  schema.pre('save',function(next){
    this.lastMod  = new Date;
    next();

    if (options && options.index) {
   schema.path('lastMod').index(options.index)
 }
  })
}

var ExchemaExample  = new userSchema.plugin(lastMod) 
//here's how to implement a plug console.log(require('util').inspect(
var lastMod = require('./lastMod');

var Game = new Schema({ ... });

Game.plugin(lastMod);

var Player = new Schema({ ... });

Player.plugin(lastMod, { index: true });

//now using statics for searching data
