import React from 'react';
import { useRouter } from 'next/router';
import { getGroupById, editGroup } from '../../mock/groups';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';

const Group = () => {
  const router = useRouter();
  const { id } = router.query;
  const group = getGroupById(id);

  const [isRequesting, setIsRequesting] = React.useState(group?.requesting);
  const [isFollowing, setIsFollowing] = React.useState(group?.member);
  const isAdmin = group?.creator;

  const requestJoin = () => {
    setIsRequesting(true);
    const editedGroup = { ...group, requesting: true };
    editGroup(id, editedGroup);
  };

  const cancelRequest = () => {
    setIsRequesting(false);
    const editedGroup = { ...group, requesting: false };
    editGroup(id, editedGroup);
  };

  const unfollow = () => {
    setIsFollowing(false);
    const editedGroup = { ...group, member: false };
    editGroup(id, editedGroup);
  };

  const showButton = (isFollowing, isRequesting, idAdmin = false) => {
    if (isFollowing) {
      return (
        <button
          disabled={idAdmin}
          onClick={() => unfollow()}
          className='px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80 disabled:opacity-50'
        >
          Sair do grupo
        </button>
      );
    } else if (isRequesting) {
      return (
        <button
          onClick={() => cancelRequest()}
          className='px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80'
        >
          Cancelar solicitação
        </button>
      );
    } else {
      return (
        <button
          onClick={() => requestJoin()}
          className='px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-purple-600 rounded-md hover:bg-purple-500 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-80'
        >
          Solicitar entrada
        </button>
      );
    }
  };

  return (
    <Layout>
      <Head>
        <title>Gamerhub - Grupo</title>
      </Head>

      <div className='w-full h-64 mx-auto md:w-9/12 '>
        <div className='p-3 bg-gray-100 rounded-sm shadow-sm'>
          <div className='font-semibold leading-8 text-center text-gray-900'>
            <h1>{group?.name}</h1>
          </div>
          <div className='text-gray-700'>
            <div className='text-center'>
              <div className='py-4'>{group?.description}</div>
            </div>
            <div className='grid text-sm text-center md:grid-cols-2'>
              <div className='grid grid-cols-2'>
                <div className='px-4 py-2 font-semibold'>Jogo</div>
                <div className='px-4 py-2'>{group?.game}</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='px-4 py-2 font-semibold'>Número de membros</div>
                <div className='px-4 py-2'>{group?.numMembers}</div>
              </div>
            </div>
          </div>
          <div className='mt-4 mb-2 text-center'>
            {showButton(isFollowing, isRequesting, isAdmin)}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Group;
