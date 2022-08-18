//React elements and hooks imports
import { FunctionComponent, useContext, useState, useEffect } from 'react'
import { TransactionContext } from '../../context/TransactionContext'
import { client } from '../../lib/sanityClient'

//Components imports
import Image from 'next/image'
import EthIcon from '../../assests/icons/eth.png'
import { FiArrowUpRight } from 'react-icons/fi'

//Styling elements imports

//Typescript models & enums imports

const TransactionHistory: FunctionComponent = () => {
    const { isLoading, currentAccount } = useContext(TransactionContext)
    const [transactionHistory, setTransactionHistory] = useState<any[]>([])

    useEffect(() => {
        (async () => {
            if (!isLoading && currentAccount) {
                const query = `*[_type=="users" && _id == "${currentAccount}"] {"transactionList": transactions[]->{amount, toAddress, timestamp, txHash}|order(timestamp desc)[0..4]}`

                const clientRes = await client.fetch(query)

                setTransactionHistory(clientRes[0].transactionList)
            }
        })()
    }, [isLoading, currentAccount])

    return (
        <div className={style.wrapper}>
            <div>
                {transactionHistory &&
                    transactionHistory?.map((transaction, index) => (
                        <div className={style.txHistoryItem} key={index}>
                            <div className={style.txDetails}>
                                <Image src={EthIcon} height={20} width={20} alt='eth' style={{marginRight:3}} />
                                {transaction.amount} Ξ sent to{' '}
                                <span className={style.toAddress}>
                                    {transaction.toAddress.substring(0, 6)}...
                                </span>
                            </div>
                            {' '}on{' '}
                            <div className={style.txTimestamp}>
                                {new Date(transaction.timestamp).toLocaleString('en-US', {
                                    timeZone: 'PST',
                                    hour12: true,
                                    timeStyle: 'short',
                                    dateStyle: 'long',
                                })}
                            </div>
                            <div className={style.etherscanLink}>
                                <a
                                    href={`https://rinkeby.etherscan.io/tx/${transaction.txHash}`}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={style.etherscanLink}
                                >
                                    View on Etherscan
                                    <FiArrowUpRight />
                                </a>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

const style = {
    wrapper: `h-full text-white select-none h-full w-screen flex-1 pt-14 flex items-end justify-end pb-12 px-8`,
    txHistoryItem: `bg-[#C86BFA] rounded-lg px-4 py-2 my-2 flex items-center justify-end`,
    txDetails: `flex items-center`,
    toAddress: `text-[#F5CF05] mx-2`,
    txTimestamp: `mx-2`,
    etherscanLink: `flex items-center text-[#FBE300]`,
}

export default TransactionHistory