// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Transactions {
    // Events

    event Transfer(
        address sender,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    // Functions

    function publishTransaction(
        address payable receiver,
        uint256 amount,
        string memory message,
        string memory keyword
    ) public {
        emit Transfer(
            msg.sender,
            receiver,
            amount,
            message,
            block.timestamp,
            keyword
        );
    }
}
