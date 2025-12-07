const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const Item = require("../models/Item");

let mongoServer;

// =========================
//   SETUP + TEARDOWN
// =========================
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

beforeEach(async () => {
  await Item.deleteMany({});
});

// =========================
//       TEST CASES
// =========================

describe("MongoDB + Mongoose Unit Tests (No API)", () => {

  // 1. Insert test
  test("should insert an item into the database", async () => {
    const item = await Item.create({ name: "Pencil", quantity: 10 });

    expect(item._id).toBeDefined();
    expect(item.name).toBe("Pencil");
    expect(item.quantity).toBe(10);
  });

  // 2. Fetch all items
  test("should fetch all items", async () => {
    await Item.create({ name: "Book" });
    await Item.create({ name: "Pen" });

    const items = await Item.find({});
    expect(items.length).toBe(2);
  });

  // 3. Fetch by filter
  test("should fetch items by category", async () => {
    await Item.create({ name: "Milk", category: "Grocery" });
    await Item.create({ name: "Soap", category: "Toiletries" });

    const grocery = await Item.find({ category: "Grocery" });

    expect(grocery.length).toBe(1);
    expect(grocery[0].name).toBe("Milk");
  });

  // 4. Update test
  test("should update an item", async () => {
    const item = await Item.create({ name: "Notebook", quantity: 1 });

    item.quantity = 5;
    const updated = await item.save();

    expect(updated.quantity).toBe(5);
  });

  // 5. Delete test
  test("should delete an item", async () => {
    const item = await Item.create({ name: "Eraser" });

    await Item.deleteOne({ _id: item._id });
    const found = await Item.findById(item._id);

    expect(found).toBeNull();
  });

  // 6. Required validation error
  test("should throw validation error if name is missing", async () => {
    let error = null;

    try {
      await Item.create({ quantity: 5 });
    } catch (err) {
      error = err;
    }

    expect(error).not.toBeNull();
    expect(error.errors.name).toBeDefined();
  });

  // 7. Default values check
  test("should use default values when not provided", async () => {
    const item = await Item.create({ name: "Marker" });

    expect(item.quantity).toBe(1);
    expect(item.category).toBe("General");
  });

  // 8. Insert many items at once
  test("should insert multiple items using insertMany()", async () => {
    await Item.insertMany([
      { name: "A" },
      { name: "B", quantity: 3 },
      { name: "C" }
    ]);

    const items = await Item.find({});
    expect(items.length).toBe(3);
  });

  // 9. Sorting test
  test("should sort items by quantity in ascending order", async () => {
    await Item.create({ name: "Item1", quantity: 10 });
    await Item.create({ name: "Item2", quantity: 2 });

    const sorted = await Item.find({}).sort({ quantity: 1 });

    expect(sorted[0].quantity).toBe(2);
    expect(sorted[1].quantity).toBe(10);
  });

});
