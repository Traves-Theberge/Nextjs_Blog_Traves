import '../styles/globals.css'
import type { AppProps } from 'next/app'
import CustomPointer from '@/components/core/CustomPointer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomPointer />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp 