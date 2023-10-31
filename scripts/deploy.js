const { ethers, upgrades } = require("hardhat");

async function main() {
  console.log("Deploying Vault...");

  // Deploy the upgradeable contract
  const Vault = await ethers.getContractFactory("Vault");
  const vault = await upgrades.deployProxy(Vault, [
    "0x358aa13c52544eccef6b0add0f801012adad5ee3", // underlying asset address
  ]);

  console.log("Proxy of Vault deployed to:", vault.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
