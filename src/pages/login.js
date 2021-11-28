import Head from 'next/head';
import Button from '../components/Button';
import Link from 'next/link';
import Image from 'next/image';

export default function Login() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <Head>
        <title>Gamerhub - Login</title>
      </Head>
      <main className='w-full max-w-md'>
        <form className='px-8 pt-6 pb-8 bg-white rounded shadow-2xl'>
          <div className='flex justify-center mb-7'>
            <Image src='/gamepad.svg' height={30} width={30} alt='logo' />
            <span className='pl-3 text-xl'>GamerHub</span>
          </div>
          <h3 className='mb-5 text-3xl font-bold text-center'>
            Entre na sua conta
          </h3>
          <div className='mb-4'>
            <label className='font-medium text-gray-900' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              className='w-full mt-2 placeholder-gray-400 border-gray-200 focus:border-purple-600'
              name='email'
              id='email'
              placeholder='pessoa@email.com.br'
            />
          </div>

          <div className='mb-4'>
            <label className='font-medium text-gray-900' htmlFor='password'>
              Senha
            </label>
            <input
              className='w-full mt-2 placeholder-gray-400 border-gray-200 focus:border-purple-600'
              type='password'
              name='password'
              id='password'
              placeholder='Digite sua sua senha'
            />
          </div>
          <Button type='submit'>Entrar</Button>

          <p className='w-full mt-4 text-sm text-center text-gray-500'>
            Não tem uma conta?{' '}
            <Link href='/signup'>
              <a className='text-blue-500 underline'>Cadastre-se aqui!</a>
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
}
