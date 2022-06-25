const { ethers } = require("hardhat");
const { hre } = require("hardhat");

async function main() {
    const ballotContract = await ethers.getContractFactory("Ballot");

    const deployBallotContract = await ballotContract.deploy(["0x7368616e00000000000000000000000000000000000000000000000000000000"], ["0x73616b6962000000000000000000000000000000000000000000000000000000"]);

    await deployBallotContract.deployed();

    console.log(
        "Ballot Contract Address: ",
        deployBallotContract.address
    );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});