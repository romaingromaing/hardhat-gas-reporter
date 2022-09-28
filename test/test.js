const { ethers } = require("hardhat");
describe("Deploy contract", function () { 
    it("Should deploy the contract at contracts/Example.sol", async function () {
        const [ account ] = await ethers.getSigners()
        const factory = await ethers.getContractFactory("Example", account)
        const contract = await factory.deploy()
        await contract.deployed()
        console.log("\n Account address: ", account.address)
        console.log("\n Contract address: ", contract.address)
    }).timeout(10000000)
})