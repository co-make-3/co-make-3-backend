const db = require("../database/dbConfig.js");

module.exports = {
  findCommentsBy,
  findAllPostComments,
  findCommentById,
  addComment,
  updateComment,
  removeComment
};

function findCommentsBy(id) {
  return db("comments").where("post_id", id);
}

function findAllPostComments(id) {
  return db("comments").where("post_id", id);
}

function findCommentById(id) {
  return db("comments")
    .where({ id })
    .first();
}

async function addComment(comment) {
  const [id] = await db("comments").insert(comment, "id");

  return findCommentById(id);
}

function updateComment(id, changes) {
  return db("comments")
    .where({ id })
    .update(changes)
    .then(count => (count > 0 ? this.findCommentById(id) : null));
}

function removeComment(id) {
  return db("comments")
    .where({ id })
    .del();
}
