// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.15;

contract User{
    string public phone;
    string public password;
    string public name;
    constructor() public {
        name="prakash";
    }


    function updateValues(string memory _phone, string memory _password ) public{
        phone = _phone;
        password = _password;
    }
}