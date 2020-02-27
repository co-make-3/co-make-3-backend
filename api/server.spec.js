const supertest = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
  describe("environment", () => {
    test("should set environment to testing", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });
  test("welcome route", async () => {
    const res = await supertest(server).get("/");
    expect(res.status).toBe(200);
    expect(res.type).toBe("application/json");
    expect(res.body.message).toMatch(/It's alive/i);
  });
});
