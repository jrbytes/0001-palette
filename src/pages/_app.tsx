import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Fira_Sans } from 'next/font/google'

const inter = Fira_Sans({
  weight: ['500'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className}`}>
      <Component {...pageProps} />
    </main>
  )
}
