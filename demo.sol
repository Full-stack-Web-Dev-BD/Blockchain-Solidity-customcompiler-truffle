// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Demo {
    uint256 x;

    function setX(uint256 _x) public {
        x = _x;
    }

    function getX() public view returns (uint256) {
        return x;
    }
}
