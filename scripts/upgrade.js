const { ethers, upgrades } = require("hardhat");

async function main() {
  const VaultV2 = await ethers.getContractFactory("VaultV2");
  let vaultV2 = await upgrades.upgradeProxy(
    "0x2a359514Feadde09b46734FeC7B1fA8c1f8D5447",
    VaultV2
  );
  console.log("Your upgraded proxy is done!", vaultV2.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
