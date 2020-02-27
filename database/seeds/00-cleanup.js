// exports.seed = async knex => {
//   await knex("comments").truncate();
//   await knex("posts").truncate();
//   await knex("users").truncate();
// };
const cleaner = require("knex-cleaner");

exports.seed = function(knex) {
  return cleaner.clean(knex);
};
