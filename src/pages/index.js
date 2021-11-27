import Head from 'next/head';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>Gamerhub</title>
      </Head>

      <main className=''>
        <h1 className='text-6xl font-bold'>Gamerhub</h1>
      </main>
    </div>
  );
}
