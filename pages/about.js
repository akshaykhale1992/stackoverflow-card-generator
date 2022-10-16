import Head from 'next/head'
import Profile from '../components/Profile'

export default function About() {
  return (
    <div>
      <Head>
        <title>Stackoverflow Card Generator | About</title>
        <meta name="description" content="Stackoverflow Card Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex flex-col items-center justify-center my-10">
        <h1 className="my-10 font-semibold text-4xl">It&apos;s a simple Card Generator</h1>
        <Profile />
      </main>
    </div>
  )
}