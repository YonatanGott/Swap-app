const main = async () => {
  const transactionFactory = await hre.ethers.getContractFactory('Transactions')
  const transactionContract = await transactionFactory.deploy()

  await transactionContract.deployed()

  console.log('Transactions deployed to:', transactionContract.address)
}

(async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()

// Transactions deployed to: 0x5248D6C883c1Da69f74C6244C0219B0f0D56A4AA