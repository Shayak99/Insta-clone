import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     {/* <h1>This is Instagram</h1> */}
     {/* header */}
      <Header />

     {/* feed */}


     {/* modal */}
    </div>
  )
}
