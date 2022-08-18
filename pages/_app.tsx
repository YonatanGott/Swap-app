import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { TransactionProvider } from '../context/TransactionContext'

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const AnyComponent = Component as any;
  return (
    <TransactionProvider>
      <AnyComponent {...pageProps} />
    </TransactionProvider>
  )
}

export default MyApp