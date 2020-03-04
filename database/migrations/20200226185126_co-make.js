exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("users", user => {
      user.increments();
      user
        .string("username", 128)
        .notNullable()
        .unique();
      user.string("password", 128).notNullable();
      user
        .string("email", 128)
        .notNullable()
        .unique();
      user.string("first_name", 128).notNullable();
      user.string("last_name", 128).notNullable();
      user.text("profile_image_url").defaultTo("");
      user.boolean("government_official").defaultTo(false);
    })

    .createTable("posts", post => {
      post.increments();
      post.text("description", 5000).notNullable();
      post.string("post_image_url").defaultTo("");
      post.string("city", 128).notNullable();
      post.string("zip_code", 10).notNullable();
      post
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      post
        .integer("votes")
        .unsigned()
        .notNullable()
        .defaultTo(0);
    })

    .createTable("comments", comment => {
      comment.increments();
      comment.text("text", 500).notNullable();
      comment.string("username").notNullable();
      comment
        .integer("post_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("posts")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      comment
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("posts")
    .dropTableIfExists("comments");
};
