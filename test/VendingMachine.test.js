const VendingMachine = artifacts.require("VendingMachine");

contract("VendingMachine",(accounts) => {
    before(async() => {
        instance = await VendingMachine.deployed();
        });
        
    it("ensures that the starting balance of the vending machine is 100"), async() => {
        let balance = await instance.getVendingMachineBalance();
        assert.equal(balance, 100, 'the initial balance of the vending machine should be 100 donuts');
    }

    it("ensures the balance of the vending machine can be updated"), async() => {
        await instance.restock(100);
        let balance = await instance.getVendingMachineBalance();
        assert.equal(balance, 200, 'the  balance of the vending machine should be 200 donuts after restocking');
    }
});