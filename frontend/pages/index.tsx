import type { NextPage } from 'next'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Based Media</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid place-items-center h-screen w-screen bg-indigo-100'>
        <div className='grid grid-rows-5 w-96 h-96 bg-white'>

          <div className='place-self-center'>
            Log In
          </div>

          <div className='rows-span'>

          </div>

        </div>
      </div>

    </>
  )
}

export default Home
