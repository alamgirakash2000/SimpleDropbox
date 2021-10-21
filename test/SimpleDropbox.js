const SimpleDropbox = artifacts.require("SimpleDropbox.sol");

contract("SimpleDropbox", () => {
  const dropbox = await SimpleDropbox.new();

  it("Should update data", async(() => {}));
});
