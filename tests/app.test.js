const app = require("../src/app");
const request = require("supertest");
const mongoose = require("../src/db/mongoose");
let token = "";
let itemId = "";

describe("Create User", () => {
  const data = {
    name: "alim",
    email: String(Math.random()) + "@alimansari.com",
    password: "12345678",
  };
  test("To test whether user is created", async () => {
    const response = await request(app).post("/users").send(data);
    expect(response.statusCode).toBe(201);
  });
});

describe("Login User", () => {
  const data = {
    email: "contact@alimansari.com",
    password: "12345678",
  };
  test("To login a user", async () => {
    const response = await request(app).post("/users/login").send(data);
    token = response.body.token;
    expect(response.statusCode).toBe(200);
  });
});

describe("Add Product to Store", () => {
  const data = {
    name: "Item 1",
    description: "Good Item 1",
    stock: "20",
    price: 220,
  };
  test("To test whether it adds a product", async () => {
    const response = await request(app)
      .post("/items")
      .set("Authorization", "Bearer " + token)
      .send(data);
    itemId = response.body._id;
    expect(response.statusCode).toBe(201);
  });
});

describe("Get a Product in Store", () => {
  test("To test whether it returns all products", async () => {
    const response = await request(app)
      .get("/items/" + itemId)
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(200);
  });
});

describe("Get All Products in Store", () => {
  test("To test whether it returns all products", async () => {
    const response = await request(app)
      .get("/items")
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(200);
  });
});

describe("Update a Product in Store", () => {
  const data = {
    name: "Item Updated",
    description: "Good Item Updated",
    stock: "19",
    price: 230,
  };
  test("To test whether it updates a product", async () => {
    const response = await request(app)
      .patch("/items/" + itemId)
      .set("Authorization", "Bearer " + token)
      .send(data);
    expect(response.statusCode).toBe(200);
  });
});

describe("Delete an Item in Store", () => {
  test("To test whether it deletes a product", async () => {
    const response = await request(app)
      .delete("/items/" + itemId)
      .set("Authorization", "Bearer " + token);
    expect(response.statusCode).toBe(200);
  });
});

describe("Logout User", () => {
  test("To test whether it logouts user", async () => {
    const response = await request(app)
      .post("/users/logout")
      .set("Authorization", "Bearer " + token)
      .send({});
    expect(response.statusCode).toBe(200);
  });
});

afterAll((done) => {
  mongoose.disconnect(done);
});
