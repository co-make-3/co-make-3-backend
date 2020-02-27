exports.seed = async knex => {
  await knex("comments").truncate();
  await knex("posts").truncate();
  await knex("users").truncate();
};
