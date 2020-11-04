pragma solidity =0.5.16;

import '../SimplifiedSwapERC20.sol';

contract ERC20 is SimplifiedSwapERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
