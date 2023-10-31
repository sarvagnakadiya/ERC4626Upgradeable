const { ethers } = require("hardhat");

async function main() {
  // Get the contract address and the owner's address
  const contractAddress = "0x2a359514Feadde09b46734FeC7B1fA8c1f8D5447"; // Replace with the actual contract address

  // Connect to the contract
  const contract = await ethers.getContractAt("Vault", contractAddress);

  const getValue = await contract.say32();
  console.log(getValue);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
