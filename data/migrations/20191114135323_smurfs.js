
exports.up = function(knex) {
  return knex.schema
  .createTable('smurfs', tbl=>{
      tbl.increments()
      tbl.string('name', 128).notNullable()
      tbl.string('img', 255)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('smurfs')
};
