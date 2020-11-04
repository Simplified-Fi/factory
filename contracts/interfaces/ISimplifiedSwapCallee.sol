pragma solidity >=0.5.0;

interface ISimplifiedSwapCallee {
    function SimplifiedSwapCall(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
