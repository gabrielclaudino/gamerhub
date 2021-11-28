import Head from 'next/head';
import GroupList from '../components/GroupList';
import Layout from '../components/Layout/Layout';
import { getGroups } from '../mock/groups';

export default function SearchGroups() {
  const groups = getGroups();

  return (
    <Layout>
      <Head>
        <title>Gamerhub</title>
      </Head>

      <div className='px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-11'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <h1 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
            Buscar grupos
          </h1>
          <p className='text-base text-gray-700 md:text-lg'>
            Lista de grupos cadastrados no sistema
          </p>
        </div>
        {groups.length === 0 ? (
          <p className='italic text-center'>
            No momento não existe nenhum grupo no sistema
          </p>
        ) : (
          <GroupList groups={groups} />
        )}
      </div>
    </Layout>
  );
}
