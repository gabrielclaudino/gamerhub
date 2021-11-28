import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Button from '../components/Button';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Gamerhub</title>
      </Head>

      <h1 className='text-3xl font-bold text-center md:text-5xl mt-7'>
        Boas vindas, gamer!
      </h1>
      <h3 className='mt-12 text-center'>O que deseja fazer agora?</h3>

      <div className='flex flex-col gap-2 p-3 mt-5'>
        <Button>Visualizar meus grupos</Button>
        <Button>Buscar novos</Button>
        <Button>Criar grupo</Button>
      </div>
    </Layout>
  );
}
