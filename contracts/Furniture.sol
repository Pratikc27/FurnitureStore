// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract furniture{

    struct Order{
        string name;
        string description;
        uint timestamp;
        address from;
    }

    address payable owner;
    Order[] orders;

    constructor(){
        owner = payable(msg.sender);
    }

    function buyFurniture(string calldata name, string calldata description) external payable{
        require(msg.value>0,"please pay the price of furniture in ethers");
        owner.transfer(msg.value);
        orders.push(Order(name, description, block.timestamp, msg.sender));
    }

    function getDetails() public view returns(Order[] memory){
        return orders;
    }
}