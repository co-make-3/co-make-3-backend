const supertest = require("supertest");

const server = require("../api/server.js");
const db = require("../database/dbConfig.js");

let token;

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

test.todo("");
