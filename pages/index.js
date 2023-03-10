import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  return (
    <>
    <Head>
      <title>RPA  | Essam</title>

    </Head>
    <h1>Essam Said</h1>
    <Link href="/ninjas" className='btn' >Essam</Link>
    </>
  )
}
