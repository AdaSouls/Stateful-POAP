const parameters = require("../parameters.json");
const hre = require("hardhat");

async function main() {
  const accounts = await ethers.getSigners();

  // Deploy PaimaL2Contract
  const PaimaL2 = await hre.ethers.getContractFactory("PaimaL2Contract");
  const paimaL2 = await PaimaL2.deploy(accounts[0], 1);

  await paimaL2.waitForDeployment();

  console.log("PaimaL2Contract deployed to: ", await paimaL2.getAddress());

  // Deploy Poap
  const Poap = await hre.ethers.getContractFactory("Poap");
  const poap = await Poap.deploy(parameters.Poap.name, parameters.Poap.symbol, accounts[0].address);
  
  await poap.waitForDeployment();
  await poap["initialize(string,address[])"](parameters.Poap.baseUri, []);

  console.log("Poap deployed and initialized at: ", await poap.getAddress());

  // Verify the contract after deploying
  /*await hre.run("verify:verify", {
    address: await poap.getAddress(),
    constructorArguments: [
      parameters.Poap.name,                                               
      parameters.Poap.symbol,
      accounts[0].address,
    ],
  });*/
  
}

main();