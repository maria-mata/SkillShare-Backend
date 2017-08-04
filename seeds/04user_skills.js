
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM user_skills; ALTER SEQUENCE user_skills_id_seq RESTART WITH 5')
    .then(function () {
      // Inserts seed entries
      return knex('user_skills').insert([
        {id: 1, users_id: 1 , skills_id:4},
        {id: 2, users_id: 2 , skills_id:1},
        {id: 3, users_id: 3 , skills_id:2},
        {id: 4, users_id: 4 , skills_id:3}
      ]);
    });
};
