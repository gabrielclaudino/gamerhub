/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from 'react';

const Avatar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='p-4'>
        <div className='relative group'>
          <button>
            <img
              className='inline object-cover w-8 h-8 mr-2 rounded-full ring-2 ring-white'
              src='/blank-profile-picture.svg'
              alt='Imagem de perfil'
            />
          </button>
          <nav
            tabIndex='0'
            className='absolute right-0 invisible transition-all bg-white border border-purple-200 rounded-sm shadow-sm opacity-0 w-30 top-full group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1'
          >
            <ul className='py-1'>
              <li>
                <Link href='/login'>
                  <a className='block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline'>
                    Sair
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Avatar;
