const SimplifiedSwapFactory = artifacts.require('SimplifiedSwapFactory')

module.exports = async function(deployer, network, accounts) {
  let feeSetter
  if (network === 'mainnet') {
    feeSetter = '0x16c5B1AD54b63A7C67CA340A2aeb85F545c819f5'
  } else {
    feeSetter = accounts[0].toString()
  }
  await deployer.deploy(SimplifiedSwapFactory, feeSetter, 30, 5)
  console.log(`Deployed SimplifiedSwapFactory on network ${network} with ${feeSetter} as feeSetter`)
}
