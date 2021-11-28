import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import Button from '../components/Button';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const redirect = (page) => {
    router.push(page);
  };

  return (
    <Layout>
      <Head>
        <title>Gamerhub</title>
      </Head>

      <h1 className='text-3xl font-bold text-center md:text-5xl mt-7'>
        Boas vindas, gamer!
      </h1>
      <h3 className='mt-12 text-center'>O que deseja fazer agora?</h3>

      <div className='flex flex-col max-w-lg gap-5 px-4 py-10 mx-auto'>
        <Button onClick={() => redirect('/my-groups')}>
          Visualizar meus grupos
        </Button>
        <Button onClick={() => redirect('/search-groups')}>Buscar novos</Button>
        <Button onClick={() => redirect('create-group')}>Criar grupo</Button>
      </div>
    </Layout>
  );
}
