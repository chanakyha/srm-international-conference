import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex min-h-screen w-full">
          <Head>
            <title>ICACST-23</title>
          </Head>
          <main className='w-full text-montserrat'>
            {/* <Header /> */}
          </main>
    </div>
  )
}
