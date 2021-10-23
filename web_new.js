let solc = require('solc');
let fs = require('fs');
let Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider());
let fileContent = fs.readFileSync("demo.sol").toString()
console.log(fileContent)

var input = {
    language: "Solidity",
    sources: {
        "demo.sol": {
            content: fileContent,
        },
    },
    settings: {
        outputSelection: {
            "*": {
                "*": ["*"]
            }
        }
    }
}

let output = JSON.parse(solc.compile(JSON.stringify(input)))
console.log("output is : ", output)
ABI = output.contracts["demo.sol"]["Demo"].abi;
bytecode = output.contracts["demo.sol"]["Demo"].evm.bytecode.object
console.log("ABI:", ABI);
console.log("Bytecode :", bytecode);