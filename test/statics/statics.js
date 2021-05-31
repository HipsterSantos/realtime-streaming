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

Model
.where('age').gte(25)
.where('tags').in(['movie', 'music', 'art'])
.select('name', 'age', 'tags')
.skip(20)
.limit(10)
.asc('age')
.slaveOk()
.hint({ age: 1, name: 1 })
.exec(callback);

Model.$where('this.firstname === this.lastname').exec(callback)

var query = Model.find({});

query.where('field', 5);
query.limit(5);
query.skip(100);

query.exec(function (err, docs) {
  // called when the `query.complete` or `query.error` are called
  // internally
});

//now using statics for searching data
