const SimpleDropbox = artifacts.require("SimpleDropbox.sol");

module.exports = function (deployer) {
  deployer.deploy(SimpleDropbox);
};
