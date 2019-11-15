const db  = require('../data/dbConfig')

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById
}

function insert(smurf){
    return db('smurfs').insert(smurf)
    //db(smurfs).insert(smurf,"id")
    //.then(ids=>{
    //     const id = ids[0]
    //     return db('smurfs')
    //     .where({id})
    //     .first()
    // })
}

function update(id, smurfs){
   return  db('smurfs').update(smurfs).where({id})
}

function remove(id){
   return  db('smurfs').where({id}).del()
}

function findById(id){
   return db('smurfs').where({id}).first()
}

function getAll(){
    return db('smurfs')
}