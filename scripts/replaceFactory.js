const fs = require("fs");

const SimplifiedSwapFactoryFromTruffle = JSON.parse(fs.readFileSync("./build/contracts/SimplifiedSwapFactory.json", "utf8"));
const SimplifiedSwapFactoryFromWaffle = JSON.parse(fs.readFileSync("./build/SimplifiedSwapFactory.json", "utf8"));
SimplifiedSwapFactoryFromTruffle.bytecode = SimplifiedSwapFactoryFromWaffle.bytecode
fs.writeFileSync("./build/contracts/SimplifiedSwapFactory.json", JSON.stringify(SimplifiedSwapFactoryFromTruffle), "utf8");

console.log("[ReplaceFactory] SimplifiedSwapFactory Truffle now using bytecode compiled from Waffle!")
