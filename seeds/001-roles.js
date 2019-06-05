
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('roles')
  .truncate() // reset the primary key back to 1 in addition to deleting data
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {name: 'Student'},
        {name: 'TA'},
        {name: 'PM'}
      ]);
    });
};
