import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css';
import Header from '../components/Header';
import Feed from '../components/Feed'

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen scrollbar-hide overflow-y-scroll">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     {/* <h1>This is Instagram</h1> */}
     {/* header */}
      <Header />

     {/* feed */}
     <Feed />


     {/* modal */}
    </div>
  )
}
