// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Ping {
    string public message = "Hello from abyannet";

    function setMessage(string calldata value) external {
        message = value;
    }
}
