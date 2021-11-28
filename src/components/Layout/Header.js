/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='flex justify-between p-3 mb-3 bg-purple-100 shadow-md'>
      <Link href='/'>
        <a className='flex items-center font-medium text-gray-900 title-font md:mb-0'>
          <Image src='/gamepad.svg' height={30} width={30} alt='logo' />
          <span className='ml-3 text-xl'>Gamerhub</span>
        </a>
      </Link>

      <img
        className='inline object-cover w-8 h-8 mr-2 rounded-full ring-2 ring-white'
        src='/blank-profile-picture.svg'
        alt='Imagem de perfil'
      />
    </header>
  );
};

export default Header;
