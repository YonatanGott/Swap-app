require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.9',
  networks: {
    rinkeby: {
      url: 'process.env.ALCHEMY_URL',
      accounts: [
        'process.env.ALCHEMY_ACCOUNT',
      ],
    },
  },
}