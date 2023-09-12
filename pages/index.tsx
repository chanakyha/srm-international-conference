import Head from 'next/head'
import Landing from '@/components/Landing'


export default function Home() {
  return (
    <div className="flex min-h-screen w-full">
          <Head>
            <title>ICACST-23</title>
          </Head>
          <main className='w-full font-montserrat'>
            <Landing/>
          </main>
    </div>
  )
}
