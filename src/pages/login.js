import Head from 'next/head';
import Button from '../components/Button';
import Link from 'next/link';

export default function Login() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <Head>
        <title>Gamerhub - Login</title>
      </Head>
      <main className='w-full max-w-md'>
        <form className='px-8 pt-6 pb-8 bg-white rounded shadow-2xl'>
          <h3 className='mt-1 text-2xl font-medium text-center mb-7'>
            Entre na sua conta
          </h3>
          <div className='mb-4'>
            <label className='font-medium text-gray-700 text-md' htmlFor='user'>
              Usuário
            </label>
            <input
              type='text'
              className='w-full mt-2 border-gray-200 focus:border-purple-600'
              name='user'
              id='user'
            />
          </div>

          <div className='mb-4'>
            <label
              className='font-medium text-gray-700 text-md'
              htmlFor='password'
            >
              Senha
            </label>
            <input
              className='w-full mt-2 border-gray-200 focus:border-purple-600'
              type='password'
              name='password'
              id='password'
            />
          </div>
          <Button type='submit'>Entrar</Button>

          <p className='w-full mt-4 text-sm text-center text-gray-500'>
            Não tem uma conta?{' '}
            <Link href='/signup' className='text-blue-500 underline'>
              Se cadastre aqui!
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
}
