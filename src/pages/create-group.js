import React, { useState } from 'react';
import Head from 'next/head';
import Button from '../components/Button';
import Layout from '../components/Layout/Layout';
import { addGroup } from '../mock/groups';
import { useRouter } from 'next/router';

export default function CreateGroup() {
  const router = useRouter();

  const [name, setName] = React.useState('');
  const [game, setGame] = React.useState('');
  const [description, setDescription] = React.useState('');

  const createGroup = (event) => {
    event.preventDefault();
    const id = addGroup(name, game, description, 1, true, true);
    router.push(`/group/${id}`);
  };

  return (
    <Layout>
      <Head>
        <title>Gamerhub</title>
      </Head>

      <div className='px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-11'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <h1 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
            Criar grupo
          </h1>
          <p className='text-base text-gray-700 md:text-lg'>
            Não encontrou o grupo que desejava? Crie a sua propria comunidade!
          </p>
        </div>
        <form action=''>
          <div className='mb-4'>
            <label className='font-medium text-gray-900'>Nome do grupo</label>
            <input
              type='text'
              className='w-full mt-2 placeholder-gray-400 border-gray-200 focus:border-purple-600'
              placeholder='Amigos do League of Legends'
              name='name'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='font-medium text-gray-900'>Jogo</label>
            <input
              type='text'
              className='w-full mt-2 placeholder-gray-400 border-gray-200 focus:border-purple-600'
              placeholder='League of Legends'
              name='game'
              id='game'
              value={game}
              onChange={(e) => setGame(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='font-medium text-gray-900'>Descrição</label>
            <textarea
              type='text'
              className='w-full mt-2 placeholder-gray-400 border-gray-200 focus:border-purple-600'
              placeholder='Fãs de LOL que se reunem para jogar juntos e se divertir'
              name='description'
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Button type='submit' onClick={createGroup}>
            Salvar
          </Button>
        </form>
      </div>
    </Layout>
  );
}
