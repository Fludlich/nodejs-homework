const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../app");
const User = require("../../db/userModel");
const { DB_HOST_TEST, PORT } = process.env;
require("dotenv").config();
mongoose.set("strictQuery", true);

describe("test", () => {
  let server;

  beforeAll(() => (server = app.listen(PORT)));
  afterAll(() => server.close());

  beforeEach(async () => await mongoose.connect(DB_HOST_TEST));
  //   afterEach(
  //     async () =>
  //       await mongoose.connection.db.dropCollection(() => mongoose.connect())
  //   );

  test("test login route", async () => {
    const newUser = {
      email: "test@mail.com",
      password: "123456",
    };

     const user = await User.create(newUser);

    const loginUser = {
      email: "test@mail.com",
      password: "123456",
    };

    const response = await request(app).post("api/users/login").send(loginUser);

    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeTruthy();
    expect.stringContaining(response.body.email);
  });
});