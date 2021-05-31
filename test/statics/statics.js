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


//now using statics for searching data
