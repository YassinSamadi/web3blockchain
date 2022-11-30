const NFT_Contract = artifacts.require("kdgNFT");

module.exports = function(deployer) {
  deployer.deploy(NFT_Contract);
};