
// New changes to the database schema 
exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', function(tbl) {
    //pk called id, autoincrements, integer
    tbl.increments(); 

    // a varchar called name 128 characters long, unique, not null
    tbl.string('name', 128).notNullable().unique(); 
  })
};

// How to undo the changes to the schema 
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('roles'); 
};
// npx knex migrate: make create_roles_table
