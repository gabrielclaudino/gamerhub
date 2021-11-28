import Head from 'next/head';
import Button from '../components/Button';
import Link from 'next/link';
import Image from 'next/image';

export default function Signup() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <Head>
        <title>Gamerhub - Cadastro</title>
      </Head>
      <main className='w-full max-w-md'>
        <div className='px-8 pt-8 pb-10 bg-white rounded shadow-2xl'>
          <div className='flex justify-center mb-7'>
            <Image src='/gamepad.svg' height={30} width={30} alt='logo' />
            <span className='pl-3 text-xl'>GamerHub</span>
          </div>

          <h3 className='mb-5 text-3xl font-bold text-center'>Cadastro</h3>

          <form>
            <div className='mb-4'>
              <label className='font-medium text-gray-900'>Nome</label>
              <input
                type='text'
                className='w-full mt-2 placeholder-gray-400 border-gray-200 focus:border-purple-600'
                placeholder='Entre com seu nome'
                name='name'
                id='name'
              />
            </div>
            <div className='mb-4'>
              <label className='font-medium text-gray-900' htmlFor='email'>
                Email
              </label>
              <input
                type='email'
                name='email'
                className='w-full mt-2 placeholder-gray-400 border-gray-200 focus:border-purple-600'
                placeholder='pessoa@email.com.br'
              />
            </div>
            <div className='mb-4'>
              <label className='font-medium text-gray-900'>Senha</label>
              <input
                type='password'
                className='w-full mt-2 placeholder-gray-400 border-gray-200 focus:border-purple-600'
                placeholder='Crie uma senha'
              />
            </div>
            <Button>Criar Conta</Button>

            <p className='w-full mt-4 text-sm text-center text-gray-500'>
              Já tem uma conta?{' '}
              <Link href='/login'>
                <a className='text-blue-500 underline'>Autentique-se aqui!</a>
              </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
