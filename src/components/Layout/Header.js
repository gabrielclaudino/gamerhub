import Link from 'next/link';
import Image from 'next/image';
import Avatar from './Avatar';

const Header = () => {
  return (
    <header className='flex justify-between p-3 mb-3 bg-purple-100 shadow-md'>
      <Link href='/'>
        <a className='flex items-center font-medium text-gray-900 title-font md:mb-0'>
          <Image src='/gamepad.svg' height={30} width={30} alt='logo' />
          <span className='ml-3 text-xl'>Gamerhub</span>
        </a>
      </Link>

      <Avatar />
    </header>
  );
};

export default Header;
