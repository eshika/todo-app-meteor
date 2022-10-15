import assert from "assert";

// Default tests for the app
describe("todo-app-meteor", function () {
  // Check correct name for package.json
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "todo-app-meteor");
  });

  // Check that client is not server
  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  // Check that server is not client
  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});
