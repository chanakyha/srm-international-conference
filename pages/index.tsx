import Head from 'next/head'
import Landing from '@/components/Landing'
import Register from '@/components/Register'


export default function Home() {
  return (
    <div className="flex min-h-screen w-full">
          <Head>
            <title>ICACST-23</title>
          </Head>
          <main className='w-full font-montserrat'>
            <Landing/>
            {/* <Register/> */}
          </main>
    </div>
  )
}
