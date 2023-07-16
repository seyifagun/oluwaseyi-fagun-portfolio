import Head from 'next/head'
import Image from 'next/image'
import { Quicksand } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Navbar from '@/sections/Navbar'
import SocialIcons from '@/components/socialIcons'
import Email from '@/components/Email'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Experience from '@/sections/Experience'
import Projects from '@/sections/Projects'
import Contact from '@/sections/Contact'

const quicksand = Quicksand({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Melo Dev Portfolio</title>
        <meta name="description" content="Created by Melo Dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={quicksand.className}>
        <Navbar />
        <SocialIcons />
        <Email />
        <main className={styles.main}>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </main>
    </>
  )
}
