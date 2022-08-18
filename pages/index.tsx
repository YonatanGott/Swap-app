import type { NextPage } from 'next'
import MainCard from '../components/home/MainCard'
import TransactionHistory from '../components/home/TransactionHistory'
import Header from '../components/layout/Header'

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#47026C] text-white select-none flex flex-col justify-between`,
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <MainCard />
      <TransactionHistory />
    </div>
  )
}

export default Home
